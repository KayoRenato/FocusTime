import { Play, Pause } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  PauseCountdownButton,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  pauseDate?: Date
  finishedDate?: Date
}

interface NewCycleFormProps {
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleID, setActiveCycleID] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormProps>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleID)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (interval >= totalSeconds) {
          setCycles((currentCycles) =>
            currentCycles.map((cycle) => {
              return cycle.id === activeCycleID
                ? { ...cycle, finishedDate: new Date() }
                : cycle
            }),
          )
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsPassed)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, cycles, activeCycleID])

  function handleCreateNewCycle(data: any) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((currentCycles) => [...currentCycles, newCycle])
    setActiveCycleID(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handlePauseCycle() {
    setCycles((currentCycles) =>
      currentCycles.map((cycle) => {
        return cycle.id === activeCycleID
          ? { ...cycle, pauseDate: new Date() }
          : cycle
      }),
    )
    setActiveCycleID(null)
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesfromSeconds = Math.floor(currentSeconds / 60)
  const secondsRest = currentSeconds % 60

  const minutes = String(minutesfromSeconds).padStart(2, '0')
  const seconds = String(secondsRest).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `FocusTime - ${minutes}:${seconds}`
    } else {
      document.title = 'FocusTime'
    }
  }, [minutes, seconds, activeCycle])

  const hasTask = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        {activeCycle ? (
          <></>
        ) : (
          <FormContainer>
            <label htmlFor="task"> I'll do ... </label>
            <TaskInput
              id="task"
              type="text"
              placeholder="something"
              disabled={!!activeCycle}
              list="task-suggestion"
              {...register('task', { required: true })}
            />

            <datalist id="task-suggestion">
              <option>Task 1</option>
              <option>Task 2</option>
              <option>Task 3</option>
            </datalist>

            <label htmlFor="minutesAmount">for</label>
            <MinutesInput
              id="minutesAmount"
              type="number"
              placeholder="00"
              step={5}
              min={1}
              max={60}
              {...register('minutesAmount', {
                required: true,
                valueAsNumber: true,
                disabled: !hasTask,
              })}
            />
            <span>minutes</span>
          </FormContainer>
        )}

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <PauseCountdownButton onClick={handlePauseCycle} type="button">
            <Pause size={24} />
            Pause
          </PauseCountdownButton>
        ) : (
          <StartCountdownButton disabled={!hasTask} type="submit">
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
