import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h2>My History</h2>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>When</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>60 minutes</td>
              <td>2 days ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>25 minutes</td>
              <td>3 days ago</td>
              <td>
                <Status statusColor="red">Suspended</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>12 minutes</td>
              <td>1 hour ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>30 minutes</td>
              <td>15 minutes ago</td>
              <td>
                <Status statusColor="yellow">In progress</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
