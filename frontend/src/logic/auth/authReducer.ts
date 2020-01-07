import { SET_CURRENT_USER, USER_LOADING, SHOW_ERROR_TO_USER } from './contants'
import { AuthState, PayLoad } from '../types'

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: '',
    name: '',
    password: '',
    loginCount: 0,
    new: false
  },
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
