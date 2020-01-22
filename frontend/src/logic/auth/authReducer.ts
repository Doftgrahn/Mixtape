import { SET_CURRENT_USER, USER_LOADING, SHOW_ERROR_TO_USER } from './contants'
import { PayLoad } from '../types'

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
}

export default function(state = initialState, action: PayLoad) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload,
        errorMsg: ''
      }
    case SHOW_ERROR_TO_USER:
      return {
        ...state,
        errorMsg: action.payload
      }
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}
