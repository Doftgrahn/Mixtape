import { PayLoad } from '../types'
import { GET_LIST, ADD_LIST, IS_LOADING, DELETE_LIST_ITEM, MUTATE_LIST } from './constants'

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
    case DELETE_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((list: any) => list._id !== action.payload)
      }
    case MUTATE_LIST:
      return {
        ...state,
        list: state.list.map((list: any) => {
          if (list._id === action.payload.id) {
            return { ...list, title: action.payload.title }
          }
          return list
        })
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
