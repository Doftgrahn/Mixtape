import { GET_TRACKS, IS_LOADING } from './constants'

const initialState = {
  lyrics: [],
  isLoading: false
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        lyrics: action.payload
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}
