import { GET_SPOTIFY_SEARCH, IS_SPOTIFY_LOADING, ERRORS_SPOTIFY } from './types'
import { PayLoad } from '../types'

const intialState = {
  spotify: [],
  isLoading: false,
  errors: {}
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
    default:
      return state
  }
}
