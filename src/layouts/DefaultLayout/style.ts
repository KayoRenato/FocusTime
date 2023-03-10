import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  box-shadow: 0.25rem 0.25rem 1rem 0.1rem ${(props) => props.theme['gray-700']};

  display: flex;
  flex-direction: column;

  hr {
    margin: 0.5rem 0;
  }
`
