import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-700']};
  height: 2.5rem;
  padding: 0.5rem 1rem;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme['primary-700']};

  font-size: inherit;
  font-weight: inherit;
  color: ${(props) => props.theme.white};

  &:focus {
    background: ${(props) => props.theme['gray-700']};
    border: 1px solid ${(props) => props.theme['primary-700']};
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
    opacity: 0.5;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesInput = styled(BaseInput)`
  width: 5rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['primary-500']};

  width: 4ren;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: ${(props) => props.theme.white};

  font-size: 1.125rem;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StartCountdownButton = styled(ButtonContainer)`
  background: ${(props) => props.theme['primary-300']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['primary-500']};
  }

  &:not(:disabled):active {
    background: ${(props) => props.theme['primary-700']};
  }
`

export const PauseCountdownButton = styled(ButtonContainer)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-500']};
  }

  &:not(:disabled):active {
    background: ${(props) => props.theme['red-700']};
  }
`
