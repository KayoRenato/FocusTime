import styled from 'styled-components'

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
