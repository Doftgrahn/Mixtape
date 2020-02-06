import { GET_TRACKS, LYRIC_IS_LOADING, SET_LYRIC_ERROR, CLEAR_LYRICS } from './constants'
import Axios from 'axios'
import { PayLoad } from '../types'

export const fetchgetTracks = (song: string) => (dispatch: any) => {
  dispatch(isLoading(true))

  Axios.get(`/api/lyrics/getTracks/${song}`)
    .then((result: any) => {
      const { data } = result
      console.log(data)
      dispatch(getTracks(data))
      dispatch(isLoading(false))
    })
    .catch((error: any) => {
      dispatch(setError(error))
    })
}

const getTracks = (tracks: any): PayLoad => ({
  type: GET_TRACKS,
  payload: tracks
})

export const clearLyrics = () => ({
  type: CLEAR_LYRICS
})

const isLoading = (loading: boolean): PayLoad => ({
  type: LYRIC_IS_LOADING,
  payload: loading
})

const setError = (error: string): PayLoad => ({
  type: SET_LYRIC_ERROR,
  payload: error
})
