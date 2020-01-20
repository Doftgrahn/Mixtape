import Axios from 'axios'

import { SET_LYRIC } from './constants'
import { isLoading } from './listAction'

export const fetchSetLyric = (url: string, id: string) => (dispatch: any) => {
  dispatch(isLoading(true))

  Axios.post('/api/lyrics/setLyric', { url, _id: id })
    .then(song => {
      const { lyrics } = song.data
      // add to actual listc
      dispatch(setLyric({ lyrics, _id: id }))
      dispatch(isLoading(false))
    })
    .catch(error => {
      console.log(error)
    })
}

const setLyric = (song: any) => ({
  type: SET_LYRIC,
  payload: song
})
