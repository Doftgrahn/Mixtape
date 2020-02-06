import {
  GET_USERS,
  IS_USERS_LOADING,
  USERS_ERROR,
  USERS_INPUT,
  SEARCH_USERS,
  UsersInterface
} from './typesUsers'

import { PayLoad } from '../types'

const initialState: UsersInterface = {
  input: '',
  users: [],
  searchUsers: [],
  isloading: false,
  errors: {}
}

export default (state = initialState, action: PayLoad) => {
  const { payload } = action
  switch (action.type) {
    case USERS_INPUT:
      return {
        ...state,
        input: payload
      }
    case SEARCH_USERS:
      return {
        ...state,
        searchUsers: payload
      }
    case GET_USERS:
      return {
        ...state,
        users: payload
      }
    case IS_USERS_LOADING:
      return {
        ...state,
        isloading: payload
      }
    case USERS_ERROR:
      return {
        ...state,
        errors: payload
      }
    default:
      return state
  }
}
