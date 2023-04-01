import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(currentState: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...currentState,
        cycles: [...currentState.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.STOP_CURRENT_CYCLE:
      return {
        ...currentState,
        cycles: currentState.cycles.map((cycle) => {
          return cycle.id === currentState.activeCycleId
            ? { ...cycle, stopDate: new Date() }
            : cycle
        }),
        activeCycleId: null,
      }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...currentState,
        cycles: currentState.cycles.map((cycle) => {
          return cycle.id === currentState.activeCycleId
            ? {
                ...cycle,
                finishedDate: new Date(),
              }
            : cycle
        }),
        activeCycleId: null,
      }
    default:
      return currentState
  }
}
