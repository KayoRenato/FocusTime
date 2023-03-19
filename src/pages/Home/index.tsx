import { Play, Stop } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'
import { CountDown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import {
  HomeContainer,
  StopCountdownButton,
  StartCountdownButton,
} from './styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
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

        if (secondsPassed >= totalSeconds) {
          setCycles((currentCycles) =>
            currentCycles.map((cycle) => {
              return cycle.id === activeCycleID
                ? { ...cycle, finishedDate: new Date() }
                : cycle
            }),
          )

          setAmountSecondsPassed(totalSeconds)
          setActiveCycleID(null)
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

  function handleStopCycle() {
    setCycles((currentCycles) =>
      currentCycles.map((cycle) => {
        return cycle.id === activeCycleID
          ? { ...cycle, startDate: new Date() }
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
        {activeCycle ? <></> : <NewCycleForm />}
        <CountDown />
        {activeCycle ? (
          <StopCountdownButton onClick={handleStopCycle} type="button">
            <Stop size={24} />
            Stop
          </StopCountdownButton>
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
