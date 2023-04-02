import styled from 'styled-components'

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

  @media (max-width: 400px) {
    max-width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    line-height: 6rem;

    div {
      width: 100%;
      line-height: 1rem;
      font-size: 4rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    line-height: 6rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['primary-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
