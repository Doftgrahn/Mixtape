import {
  GET_TRACKS,
  LYRIC_IS_LOADING,
  CLEAR_LYRICS,
  SET_LYRIC_ERROR,
  LyricsStateInterface
} from './constants'
import { PayLoad } from '../types'

const initialState: LyricsStateInterface = {
  lyrics: [],
  isLoading: false,
  errors: {}
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        lyrics: action.payload
      }
    case LYRIC_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_LYRIC_ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case CLEAR_LYRICS:
      return {
        ...state,
        lyrics: [],
        errors: {},
        isLoading: false
      }
    default:
      return state
  }
}
