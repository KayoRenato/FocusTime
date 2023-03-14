import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const hasTask = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task"> I'll do ... </label>
          <TaskInput
            id="task"
            type="text"
            placeholder="something"
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
            min={5}
            max={60}
            {...register('minutesAmount', {
              required: true,
              valueAsNumber: true,
              disabled: !hasTask,
            })}
          />
          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={!hasTask} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
