import { Play } from 'phosphor-react'
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
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> I'll do ... </label>
          <TaskInput
            id="task"
            type="text"
            placeholder="something"
            list="task-suggestion"
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

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
