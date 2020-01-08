import { ReactNode } from 'react'

export interface User {
  id: string
  name: string
  password: string
  loginCount: number
  new: boolean
}

export interface BoardInterface {
  userId: string
  title: string
  isLoading: boolean
}

export interface PayLoad {
  type: string
  payload: object | boolean | string
}

export interface RootProps {
  initialState: object
  children: ReactNode
}

export interface AuthState {
  isAuthenticated: boolean
  user: User
  loading: boolean
}
