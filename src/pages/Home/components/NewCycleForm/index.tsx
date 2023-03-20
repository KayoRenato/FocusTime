import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, MinutesInput, TaskInput } from './styles'

interface NewCycleFormProps {
  hasTask: string | undefined
}

export function NewCycleForm(props: NewCycleFormProps) {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
          disabled: !props.hasTask,
        })}
      />
      <span>minutes</span>
    </FormContainer>
  )
}
