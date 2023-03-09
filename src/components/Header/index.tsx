import { ClockCounterClockwise, Target, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <h1>
        <Target size={32} />
        <span>Focus</span> Time
      </h1>

      <nav>
        <NavLink to="/" title="timer">
          <Timer size={16} weight="light" />
          Timer
        </NavLink>
        <NavLink to="/history" title="history">
          <ClockCounterClockwise size={16} weight="light" />
          History
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
