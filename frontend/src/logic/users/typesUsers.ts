import { UserInterface } from '../auth/contants'

export const USERS_INPUT = 'USERS_INPUT'
export const GET_USERS = 'GET_USERS'
export const SEARCH_USERS = 'SEARCH_USERS'
export const INVITED_USERS = 'INVITED_USERS'
export const ADD_USERS_COLLABORATOR = 'ADD_USERS_COLLABORATOR'
export const DELETE_USER_COLLABORATOR = 'DELETE_USER_COLLABORATOR'

export const IS_USERS_LOADING = 'IS_USERS_LOADING'
export const USERS_ERROR = 'USERS_ERROR'

export interface UsersStateInterface {
  input: string
  users: UserInterface[]
  searchUsers: UserInterface[]
  invitedUsers: UserInterface[]
  isloading: boolean
  errors: object
}
