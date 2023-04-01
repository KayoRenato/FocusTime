import { produce } from 'immer'

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
      return produce(currentState, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.STOP_CURRENT_CYCLE: {
      const currentCycleIndex = currentState.cycles.findIndex((cycle) => {
        return cycle.id === currentState.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return currentState
      }

      return produce(currentState, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].stopDate = new Date()
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = currentState.cycles.findIndex((cycle) => {
        return cycle.id === currentState.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return currentState
      }

      return produce(currentState, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }

    default:
      return currentState
  }
}
