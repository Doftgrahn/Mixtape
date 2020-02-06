import {
  GET_SPOTIFY_SEARCH,
  IS_SPOTIFY_LOADING,
  ERRORS_SPOTIFY,
  DOES_SPOTIFY_NEED_REFRESH,
  SpotifyInterface
} from './types'
import { PayLoad } from '../types'

const intialState: SpotifyInterface = {
  spotify: [],
  isLoading: false,
  errors: {},
  needsRefresh: false
}

export default (state = intialState, action: PayLoad) => {
  switch (action.type) {
    case GET_SPOTIFY_SEARCH:
      return {
        ...state,
        spotify: action.payload
      }
    case IS_SPOTIFY_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case ERRORS_SPOTIFY:
      return {
        ...state,
        isLoading: action.payload
      }
    case DOES_SPOTIFY_NEED_REFRESH:
      return {
        ...state,
        needsRefresh: action.payload
      }
    default:
      return state
  }
}
