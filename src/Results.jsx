import { useContext } from 'react'
import { GameContext } from './providers/GameProvider'
import { Box, Button, Card } from '@mui/material'

export function Results() {
  const { currentGame, nextRound } = useContext(GameContext)
  const { names } = currentGame
  return (
    <Card>
      <div>Name | Round 1 | Round 2 | Round 3</div>
      <div>
        <ul>
          {names.map((e) => (
            <li key={e.text}>
              <div>{`${e.text} ${e.results[0]} ${e.results[1]} ${e.results[2]}`}</div>
            </li>
          ))}
        </ul>
      </div>
      <Box width="100%" display="flex" justifyContent="right">
        <div style={{ margin: '1em', marginRight: '2em' }}>
          <Button width="100%" margin={6} onClick={nextRound}>
            Next
          </Button>
        </div>
      </Box>
    </Card>
  )
}
