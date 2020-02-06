import {
  SET_CURRENT_USER,
  USER_LOADING,
  SHOW_ERROR_TO_USER,
  CLEAR_USER,
  AuthStateInterface
} from './contants'
import { PayLoad } from '../types'

const initialState: AuthStateInterface = {
  isAuthenticated: false,
  user: {
    date: '',
    _id: '',
    id: '',
    name: '',
    googleId: '',
    spotifyId: '',
    avatar: [],
    spotifyToken: '',
    googleToken: '',
    email: ''
  },
  loading: false
}

export default function(state = initialState, action: PayLoad) {
  console.log(state)
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
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
    case CLEAR_USER:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      }
    default:
      return state
  }
}
