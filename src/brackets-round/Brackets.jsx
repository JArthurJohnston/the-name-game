import { useContext, useMemo, useState } from 'react'
import { GameContext } from '../providers/GameProvider'
import { ROUNDS_MAP } from '../providers/game-rounds'
import { Card } from '@mui/material'
import { Results } from '../Results'

const PASS_NAME = { text: 'PASS', results: [0, 0, 1] }

export function Brackets() {
  const { currentGame } = useContext(GameContext)
  const [index, setIndex] = useState(0)
  const names = useMemo(() => {
    const sortedNames = currentGame.names
      .filter(ROUNDS_MAP.YesOrNo.passed)
      .sort((a, b) => a.results[1] < b.results[1])

    if (sortedNames.length % 2 != 0) {
      return [PASS_NAME, ...sortedNames]
    }

    return sortedNames
  }, [])

  if(index >= names.length - 1) {
    return <Results />
  }

  const name1 = names[index]
  const name2 = names[index + 1]

  const advanceName = (name) => {
    if(name === name1) {
        name2.results[2] = 0
    }
    if(name === name2) {
        name1.results[2] = 0
    }
    setIndex(index + 1)
  }

  return (
    <Card>
      <div style={{ width: '100%' }}>
        <button onClick={() => advanceName(name1)}>{name1.text}</button>
        <button onClick={() => advanceName(name2)}>{name2.text}</button>
      </div>
      <ul>
        {names.map((e) => (
          <li key={e.text}>{e.text}</li>
        ))}
      </ul>
    </Card>
  )
}
