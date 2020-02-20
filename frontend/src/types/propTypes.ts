import { ModalStateInterface } from '../logic/modal/constants'

export interface AppInterface {
  theme: string
}

export interface LandingInterface {
  auth: boolean
}

export interface PlaylistInterface {
  isLoading: boolean
  modal: ModalStateInterface
}

export interface SetlistProps {
  modal: boolean
  collaborators: BoardInterface[]
}

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

export interface TrackInterface {
  title: string
  date: string
  _id: string
  boardId: string
  userId: string
  lyrics: string
  spotifyTrackID: string
  uri: string
}
