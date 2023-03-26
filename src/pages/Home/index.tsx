import { Play, Stop } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext'
// import { useForm } from 'react-hook-form'
import { CountDown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import {
  HomeContainer,
  StopCountdownButton,
  StartCountdownButton,
} from './styles'

interface NewCycleFormProps {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, createNewCycle, stopCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormProps>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm
  const hasTask = watch('task')

  function handlesCreateNewCycle(data: NewCycleFormProps) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handlesCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          {activeCycle ? <></> : <NewCycleForm hasTask={hasTask} />}
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton onClick={stopCycle} type="button">
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
