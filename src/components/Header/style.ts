import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  h1 {
    display: flex;
    align-items: center;
    font-family: 'Roboto Mono', monospace;

    span {
      margin-left: 0.5rem;
      color: ${({ theme }) => theme['primary-500']};
    }
  }

  Target {
    color: ${(props) => props.theme['primary-500']};
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: small;

    text-decoration: none;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    color: ${({ theme }) => theme.white};

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme['primary-500']};
      cursor: pointer;
    }

    &.active {
      color: ${({ theme }) => theme['primary-300']};
    }
  }
`
