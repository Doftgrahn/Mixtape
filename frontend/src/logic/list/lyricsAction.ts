import Axios from 'axios'

import { SET_LYRIC } from './constants'
import { isLoading } from './listAction'

import { setLyricInActiveSong } from '../activeList/activeListAction'

export const fetchSetLyric = (url: string, id: string) => (dispatch: any) => {
  dispatch(isLoading(true))

  Axios.post('/api/lyrics/setLyric', { url, _id: id })
    .then(song => {
      const { lyrics } = song.data
      dispatch(setLyric({ lyrics: lyrics, _id: id }))
      dispatch(setLyricInActiveSong(lyrics))
      dispatch(isLoading(false))
    })
    .catch(_error => {})
}

const setLyric = (song: any) => ({
  type: SET_LYRIC,
  payload: song
})
