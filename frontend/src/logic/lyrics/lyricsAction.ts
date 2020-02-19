import { GET_TRACKS, LYRIC_IS_LOADING, CLEAR_LYRICS } from './constants'
import Axios from 'axios'
import { PayLoad } from '../types'

export const fetchgetTracks = (song: string) => async (dispatch: any) => {
  dispatch(isLoading(true))
  const lyric = await Axios.get(`/api/lyrics/getTracks/${song}`)
  const { data } = lyric
  dispatch(getTracks(data))
  dispatch(isLoading(false))
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
