import { useContext } from 'react'
import { CyclesContext } from '../..'
import { FormContainer, MinutesInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormProps>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const hasTask = watch('task')

  return (
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
  )
}
