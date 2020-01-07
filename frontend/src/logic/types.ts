import { ReactNode } from 'react'
import { read } from 'fs'

export interface User {
  id: string
  name: string
  password: string
  loginCount: number
  new: boolean
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
  user: User
  loading: boolean
}
