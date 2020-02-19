import { GET_TRACKS, LYRIC_IS_LOADING, CLEAR_LYRICS, LyricsStateInterface } from './constants'
import { PayLoad } from '../types'

const initialState: LyricsStateInterface = {
  lyrics: [],
  isLoading: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case GET_TRACKS:
      console.log(action.payload)
      return {
        ...state,
        lyrics: action.payload
      }
    case LYRIC_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case CLEAR_LYRICS:
      return {
        ...state,
        lyrics: [],
        isLoading: false
      }
    default:
      return state
  }
}
