import { Play, Stop } from 'phosphor-react'
import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'
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

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CycleContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const { handleSubmit, reset, watch } = useForm<NewCycleFormProps>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const hasTask = watch('task')

  function markCycleAsFinished() {
    setCycles((currentCycles) =>
      currentCycles.map((cycle) => {
        return cycle.id === activeCycleId
          ? { ...cycle, finishedDate: new Date() }
          : cycle
      }),
    )
  }

  function handleCreateNewCycle(data: any) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((currentCycles) => [...currentCycles, newCycle])
    setActiveCycleId(id)
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

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCycleAsFinished }}
        >
          {activeCycle ? <></> : <NewCycleForm />}
          <CountDown />
        </CyclesContext.Provider>

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
