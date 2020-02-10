export const USERS_INPUT = 'USERS_INPUT'
export const GET_USERS = 'GET_USERS'
export const SEARCH_USERS = 'SEARCH_USERS'
export const INVITED_USERS = 'INVITED_USERS'

export const IS_USERS_LOADING = 'IS_USERS_LOADING'
export const USERS_ERROR = 'USERS_ERROR'

export interface UsersInterface {
  input: string
  users: []
  searchUsers: []
  isloading: boolean
  errors: object
  invitedUsers: any
}
