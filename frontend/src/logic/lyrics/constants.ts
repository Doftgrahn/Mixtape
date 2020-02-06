export const GET_TRACKS = 'GET_TRACKS'
export const LYRIC_IS_LOADING = 'LYRIC_IS_LOADING'
export const CLEAR_LYRICS = 'CLEAR_LYRICS'

export const SET_LYRIC_ERROR = 'SET_LYRIC_ERROR'

export interface LyricsStateInterface {
  lyrics: []
  isLoading: boolean
  errors: object
}
