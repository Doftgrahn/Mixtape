import { ReactNode } from 'react'

export interface BoardInterface {
  userId: string
  title: string
  user: string
  description: string
  isLoading: boolean
  list: any
  collaborators: [String]
  _id: string
  isOwner?: boolean
}

export interface BoardStateInterface {
  activeBoard: string
  boards: BoardInterface[]
  collaborators: BoardInterface[]
  loading: boolean
}

export interface PayLoad {
  type: string
  payload: object | boolean | string | any
}

export interface RootProps {
  initialState: object
  children: ReactNode
}
