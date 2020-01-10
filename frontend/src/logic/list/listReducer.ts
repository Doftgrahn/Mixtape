import { PayLoad } from '../types'
import { GET_LIST, ADD_LIST, IS_LOADING } from './constants'

const initialState: any = {
  list: [],
  isLoading: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      }
    case ADD_LIST:
      return {
        ...state,
        list: [...state.list, action.payload].flat()
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
