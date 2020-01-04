import { ReactNode } from 'react'

export interface User {
  name: string
  password: string
}

export interface PayLoad {
  type: string
  payload: object
}

export interface RootProps {
  initialState: object
  children: ReactNode
}

export interface AuthState {
  isAuthenticated: boolean
  user: object
  loading: boolean
}
