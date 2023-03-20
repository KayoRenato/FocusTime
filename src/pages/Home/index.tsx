import { Play, Stop } from 'phosphor-react'
import { createContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
// import { useForm } from 'react-hook-form'
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

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CycleContextType)

interface NewCycleFormProps {
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const newCycleForm = useForm<NewCycleFormProps>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm
  const hasTask = watch('task')

  function markCurrentCycleAsFinished() {
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

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleStopCycle() {
    setCycles((currentCycles) =>
      currentCycles.map((cycle) => {
        return cycle.id === activeCycleId
          ? { ...cycle, startDate: new Date() }
          : cycle
      }),
    )
    setActiveCycleId(null)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            {activeCycle ? <></> : <NewCycleForm hasTask={hasTask} />}
          </FormProvider>
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
