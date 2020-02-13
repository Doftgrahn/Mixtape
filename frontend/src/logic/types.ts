import { ReactNode } from 'react'

export interface BoardInterface {
  userId: string
  title: string
  user: string
  description: string
  isLoading: boolean
  list: any
  collaborators: []
  _id: string
}

export interface BoardStateInterface {
  activeBoard: string
  boards: BoardInterface
  loading: boolean
}

export interface PlaylistInterface {}

export interface PayLoad {
  type: string
  payload: object | boolean | string | any
}

export interface RootProps {
  initialState: object
  children: ReactNode
}
