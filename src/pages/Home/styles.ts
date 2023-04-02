import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media (max-width: 768px) or (max-height: 600px) {
    align-items: initial;
    form {
      gap: 1.5rem;
    }
  }
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
  @media (max-width: 768px) or (max-height: 600px) {
    max-height: 3rem;
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

export const StopCountdownButton = styled(ButtonContainer)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-500']};
  }

  &:not(:disabled):active {
    background: ${(props) => props.theme['red-700']};
  }
`
