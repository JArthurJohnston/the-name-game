import { useContext } from 'react'
import { GameContext } from './providers/GameProvider'
import { SelectMenu } from './SelectMenu'
import { YesNoRound } from './yes-no-round/YesNoRound'
import { RoundRobin } from './RoundRobin'
import { Brackets } from './brackets-round/Brackets'

const rounds = [YesNoRound, RoundRobin, Brackets]

export function MainMenu() {
  const { currentGame } = useContext(GameContext)

  const RoundComponent = rounds[currentGame?.round]

  return currentGame ? <RoundComponent game={currentGame} /> : <SelectMenu />
}
