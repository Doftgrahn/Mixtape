import { MOVE_PLAYLIST_ITEM } from './constants'
import Axios from 'axios'
export const movePlaylistItem = (oldIndex: number, newIndex: number) => (
  dispatch: any,
  getState: any
) => {
  const items = getState().list.list.slice()
  const results = items.slice()
  const firstItem = items[oldIndex]
  const secondItem = items[newIndex]
  results[oldIndex] = items[newIndex]
  results[newIndex] = firstItem
  moveplaylistPUT(firstItem, secondItem)
  dispatch(moveItem(results))
}

const moveItem = (result: any) => ({
  type: MOVE_PLAYLIST_ITEM,
  payload: result
})

const moveplaylistPUT = (firstItem: any, secondItem: any) => {
  Axios.post('/api/playlist/moveplaylist', { firstItem, secondItem })
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log('error')
    })
}
