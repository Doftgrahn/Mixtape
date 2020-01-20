import { GET_TRACKS, LYRIC_IS_LOADING } from './constants'
import Axios from 'axios'

export const fetchgetTracks = (song: string) => (dispatch: any) => {
  dispatch(isLoading(true))

  Axios.get(`/api/lyrics/getTracks/${song}`)
    .then((result: any) => {
      const { data } = result
      dispatch(getTracks(data))
      dispatch(isLoading(false))
    })
    .catch((error: any) => {
      console.log(error)
    })
}

const getTracks = (tracks: any) => ({
  type: GET_TRACKS,
  payload: tracks
})

const isLoading = (loading: boolean) => ({
  type: LYRIC_IS_LOADING,
  payload: loading
})
