import { differenceInSeconds } from 'date-fns'
import { useState, useEffect, useContext } from 'react'
import { CyclesContext } from '../..'
import { CountdownContainer, Separator } from './styles'

export function CountDown() {
  const { activeCycle, activeCycleId, markCycleAsFinished } =
    useContext(CyclesContext)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsPassed >= totalSeconds) {
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsPassed)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, cycles, activeCycleId])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesFromSeconds = Math.floor(currentSeconds / 60)
  const secondsRest = currentSeconds % 60

  const minutes = String(minutesFromSeconds).padStart(2, '0')
  const seconds = String(secondsRest).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `FocusTime - ${minutes}:${seconds}`
    } else {
      document.title = 'FocusTime'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
