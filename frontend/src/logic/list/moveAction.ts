import { MOVE_PLAYLIST_ITEM, SET_REFERENCE_LIST } from './constants'
import Axios from 'axios'
export const movePlaylistItem = (oldIndex: number, newIndex: number) => (
  dispatch: any,
  getState: any
) => {
  const items = getState().list.list.slice()
  const results = items.slice()
  const firstItem = items[oldIndex]
  results[oldIndex] = items[newIndex]
  results[newIndex] = firstItem
  dispatch(moveItem(results))
}

export const alternativePlatlist = () => (dispatch: any, getState: any) => {
  const playlist = getState().list.list
  dispatch(setalternativelist(playlist))
}

const moveItem = (result: any) => ({
  type: MOVE_PLAYLIST_ITEM,
  payload: result
})

export const setalternativelist = (playlist: any) => ({
  type: SET_REFERENCE_LIST,
  payload: playlist
})

export const moveplaylistPUT = (finalIndex: any) => (_dispatch: any, getState: any) => {
  const firstItem = getState().list.referenceList[finalIndex]
  const secondItem = getState().list.list[finalIndex]
  Axios.post('/api/playlist/moveplaylist', { firstItem, secondItem })
    .then(result => {})
    .catch(error => {})
}
