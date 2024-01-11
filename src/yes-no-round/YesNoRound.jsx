import { ThumbDown, ThumbUp } from '@mui/icons-material'
import { Box, Button, Card, Typography } from '@mui/material'
import { useContext, useMemo, useState } from 'react'
import { GameContext } from '../providers/GameProvider'
import { ROUNDS_MAP } from '../providers/game-rounds'
import { Results } from '../Results'

const round = ROUNDS_MAP.YesOrNo

export function YesNoRound() {
  const { currentGame } = useContext(GameContext)
  const roundNames = useMemo(
    () => currentGame.names.filter((e) => !e.results[round.index]), // need to randomize
    []
  )
  const [index, setIndex] = useState(0)
  const currentName = roundNames[index]

  if (index >= roundNames.length) {
    return <Results />
  }

  const onYes = () => {
    currentName.results[round.index]++
    setIndex(index + 1)
  }

  const onNo = () => {
    currentName.results[round.index]++
    setIndex(index + 1)
  }

  return (
    <>
      <Card>
        <Box display="flex" flexDirection="column">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#8BD3E6',
              height: '10em',
              color: 'white',
            }}
          >
            <Typography variant="h3">{currentName.text}</Typography>
          </div>
          <Box
            style={{ width: '100%', height: '6em' }}
            display="flex"
            justifyContent="space-evenly"
            margin={3}
          >
            <Button
              variant="contained"
              onClick={onNo}
              startIcon={<ThumbDown fontSize="large" />}
            >
              No
            </Button>
            <Button
              variant="contained"
              onClick={onYes}
              endIcon={<ThumbUp fontSize="large" />}
            >
              Yes
            </Button>
          </Box>
          <Box width="100%" display="flex" justifyContent="center" padding={1}>
            <Typography>{`Names Left: ${
              roundNames.length - index
            }`}</Typography>
          </Box>
        </Box>
      </Card>
      {/* <Grid item sm={6}>
        <Button
          color="secondary"
          variant="contained"
          onClick={onNo}
          startIcon={<ThumbDown fontSize="large" />}
        >
          No
        </Button>
      </Grid>
      <Grid item sm={6}>
        <Button
          color="success"
          variant="contained"
          onClick={onYes}
          endIcon={<ThumbUp fontSize="large" />}
        >
          Yes
        </Button>
      </Grid> */}
    </>
  )
}
