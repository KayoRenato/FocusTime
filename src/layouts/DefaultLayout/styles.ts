import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;

  height: fit-content;

  margin: 1rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  hr {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 950px) {
    font-size: 87.5%;
    margin: 1rem 1rem;
    padding: 1.5rem;
    height: calc(100vh - 1rem);
  }
`
