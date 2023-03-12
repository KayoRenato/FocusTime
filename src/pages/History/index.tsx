import { HistoryContainer, HistoryList } from './styles'

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
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>25 minutes</td>
              <td>3 days ago</td>
              <td>Suspended</td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>12 minutes</td>
              <td>1 hour ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>30 minutes</td>
              <td>15 minutes ago</td>
              <td>In progress</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
