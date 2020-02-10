import {
  GET_USERS,
  IS_USERS_LOADING,
  USERS_ERROR,
  USERS_INPUT,
  SEARCH_USERS,
  INVITED_USERS,
  ADD_USERS_COLLABORATOR,
  DELETE_USER_COLLABORATOR,
  UsersInterface
} from './typesUsers'

import { PayLoad } from '../types'

const initialState: UsersInterface = {
  input: '',
  users: [],
  searchUsers: [],
  invitedUsers: [],
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
    case ADD_USERS_COLLABORATOR:
      return {
        ...state,
        invitedUsers: [...state.invitedUsers, action.payload]
      }
    case DELETE_USER_COLLABORATOR:
      console.log(action.payload)
      console.log(state.invitedUsers)
      return {
        ...state,
        invitedUsers: state.invitedUsers.filter((x: any) => x._id !== action.payload)
      }
    case INVITED_USERS:
      return {
        ...state,
        invitedUsers: payload
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
