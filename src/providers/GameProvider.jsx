import { createContext, useState } from 'react'
import { GAME_ROUNDS } from './game-rounds'

const defaultGame = {
  title: 'new baby name',
  round: 2,
  names: [
    { text: 'Lindsay', results: [1, 2, 1] },
    { text: 'Shannon', results: [0, 1, 1] },
    { text: 'Louis', results: [1, -3, 1] },
    { text: 'Gertrude', results: [0, 0, 1] },
    { text: 'Olivia', results: [1, -2, 1] },
    { text: 'Lillian', results: [1, 3, 1] },
    { text: 'Allison', results: [1, 4, 1] },
    { text: 'Alexa', results: [0, 0, 1] },
  ],
}

export const GameContext = createContext()

export function GameProvider({ children }) {
  const [currentGameIndex, setCurrentGameIndex] = useState(0)
  const [games, setGames] = useState([defaultGame])
  const currentGame = games[currentGameIndex]
  const currentRound = GAME_ROUNDS[currentGame?.round]

  const addGame = (newGame) => {
    setGames([...games, newGame])
  }

  const playGame = (game) => {
    const gameIndex = games.indexOf(game)
    setCurrentGameIndex(gameIndex)
  }

  const nextRound = () => {
    currentGame.round++
    setGames([...games])
  }

  return (
    <GameContext.Provider
      value={{ playGame, currentGame, games, addGame, nextRound, currentRound }}
    >
      {children}
    </GameContext.Provider>
  )
}
