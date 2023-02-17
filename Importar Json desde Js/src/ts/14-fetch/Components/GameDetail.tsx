import { useEffect, useState } from 'react'
import { GameI } from '../../../fakeApi/types'

const GameDetail = () => {
  const [game, setGame] = useState<GameI>() 
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const getGame = async () => {
      setLoading(true)
      try {
        const game = await (await fetch('/api/games/eObG8qSEgz1MuPPxG34X')).json()
        setGame(game.game)
      } catch (error: unknown) {
        setError((error as Error).message)
      }
      console.log(game)
      setLoading(false)
    }
    getGame()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Game Detail</h1>
      {game && (
        <div>
          <h2>{game.name}</h2>
          <p>{game.achievements?.filter((a) => a.unlocktime).length} - {game.achievements?.length}</p>
        </div>
      )}
    </div>
  )
}

export default GameDetail
