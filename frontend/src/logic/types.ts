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
  readonly isAuthenticated: boolean
  readonly user: object
  readonly loading: boolean
}
