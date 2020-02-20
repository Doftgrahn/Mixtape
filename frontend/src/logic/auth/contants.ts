export const GET_ERRORS: string = 'GET_ERRORS'
export const USER_LOADING: string = 'USER_LOADING'
export const SET_CURRENT_USER: string = 'SET_CURRENT_USER'
export const SHOW_ERROR_TO_USER: string = 'SHOW_ERROR_TO_USER'
export const CLEAR_USER: string = 'CLEAR_USER'

export interface UserInterface {
  date: string
  _id: string
  id: string
  name: string
  googleId: string
  spotifyId: string
  avatar: []
  spotifyToken: string
  googleToken: string
  email: string
}

export interface AuthStateInterface {
  isAuthenticated: boolean
  user: UserInterface
  loading: boolean
}
