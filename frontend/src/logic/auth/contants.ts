export const GET_ERRORS: string = 'GET_ERRORS'
export const USER_LOADING: string = 'USER_LOADING'
export const SET_CURRENT_USER: string = 'SET_CURRENT_USER'
export const SHOW_ERROR_TO_USER: string = 'SHOW_ERROR_TO_USER'
export const CLEAR_USER = 'CLEAR_USER'

export interface User {
  id: string
  name: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User
  loading: boolean
}
