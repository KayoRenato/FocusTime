import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      background: ${(props) => props.theme['gray-600']};

      padding: 1rem;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      position: sticky;
      top: 0;
      z-index: 1;

      &:first-child {
        border-top-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 2px solid ${(props) => props.theme['gray-800']};
      padding: 1.25rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
      }
    }

    tbody {
      tr {
        &:last-child {
          td:first-child {
            border-bottom-left-radius: 8px;
          }

          td:last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    table {
      max-height: 200px;

      td {
        padding: 1rem;

        &:first-child {
          width: 33%;
        }
      }
    }
  }
`

interface StatusProps {
  statusColor: 'yellow' | 'green' | 'red'
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[`${props.statusColor}-500`]};
  }
`
