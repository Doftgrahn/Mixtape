import { ReactNode } from 'react'

export interface BoardInterface {
  userId: string
  title: string
  isLoading: boolean
  list: any
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
