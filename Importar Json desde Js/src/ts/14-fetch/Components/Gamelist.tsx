import { List, ListItem } from '../UI/List'
import { GameI } from '../../../fakeApi/types'
import Card from '../UI/Card'

interface GameListProps {
  games: GameI[]
}

const GameList = (props: GameListProps) => {
  return (
    <List>
      {props.games.map((item) => {
        return (
          <ListItem key={item.id}>
            <Card title={item.name}>
              <img width='100%' src={item.imgUrl} alt={item.name} />
            </Card>
          </ListItem>
        )
      })}
    </List>
  )
}

export default GameList
