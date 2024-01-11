import { Button, Card } from '@mui/material'
import { useContext, useMemo, useState } from 'react'
import { GameContext } from './providers/GameProvider'
import { ROUNDS_MAP } from './providers/game-rounds'
import { generatePairs } from './round-robin-pairs'
import { randomize } from './randmizer'
import { Results } from './Results'

const round = ROUNDS_MAP.RoundRobin
const previousRound = ROUNDS_MAP.YesOrNo

function RRButton({ children, onClick }) {
  return (
    <Button variant="contained" size="large" onClick={onClick}>
      <div
        style={{
          width: '15em',
          height: '15em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </Button>
  )
}

export function RoundRobin() {
  const [index, setIndex] = useState(0)
  const { currentGame } = useContext(GameContext)
  const names = useMemo(
    () =>
      randomize(generatePairs(currentGame.names.filter(previousRound.passed))),
    []
  )

  if (index >= names.length) {
    return <Results />
  }

  const currentPair = names[index]
  const name1 = currentPair[0]
  const name2 = currentPair[1]

  const givePoints = (name) => {
    if (name === name1) {
      name1.results[round.index]++
      name2.results[round.index]--
    }
    if (name === name2) {
      name2.results[round.index]++
      name1.results[round.index]--
    }
  }

  const next = (name) => {
    givePoints(name)
    setIndex(index + 1)
  }

  return (
    <Card>
      <RRButton onClick={() => next(name1)}>{name1?.text}</RRButton>
      <RRButton onClick={() => setIndex(index + 1)}>Tie</RRButton>
      <RRButton onClick={() => next(name2)}>{name2?.text}</RRButton>
    </Card>
  )
}

/*
     ___________________________
    |_____|Sally|Jane|Sarah|Jess|
    |Sally|_____|__x_|__x__|__x_|
    |Jane |_____|____|__x__|__x_|
    |Sarah|_____|____|_____|__x_|
    |Jess |_____|____|_____|____|
*/
