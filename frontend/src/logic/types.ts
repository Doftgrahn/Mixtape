import { ReactNode } from 'react'

export interface BoardInterface {
  userId: string
  title: string
  user: string
  date: ''
  boardId: ''
  description: string
  collaborators: [String]
  _id: string
  spotifyTrackID: ''
  uri: ''
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
