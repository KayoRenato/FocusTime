import { createContext, ReactNode, useReducer, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  stopCycle: () => void
}

export const CyclesContext = createContext({} as CycleContextType)

interface CycleProviderProps {
  children: ReactNode
}

export function CyclesProvider({ children }: CycleProviderProps) {
  const [cycles, dispatch] = useReducer(
    (currentState: Cycle[], action: any) => {
      if (action.type === 'ADD_NEW_CYCLE') {
        return [...currentState, action.payload.newCycle]
      }

      return currentState
    },
    [],
  )

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: { activeCycleId },
    })

    // setCycles((currentCycles) =>
    //   currentCycles.map((cycle) => {
    //     return cycle.id === activeCycleId
    //       ? { ...cycle, finishedDate: new Date() }
    //       : cycle
    //   }),
    // )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: { newCycle },
    })

    // setCycles((currentCycles) => [...currentCycles, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  function stopCycle() {
    dispatch({
      type: 'STOP_CURRENT_CYCLE',
      payload: { activeCycleId },
    })

    // setCycles((currentCycles) =>
    //   currentCycles.map((cycle) => {
    //     return cycle.id === activeCycleId
    //       ? { ...cycle, stopDate: new Date() }
    //       : cycle
    //   }),
    // )
    setActiveCycleId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        stopCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
