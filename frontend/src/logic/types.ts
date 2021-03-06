import { ReactNode } from 'react'
import { AuthStateInterface } from './auth/contants'
import { ActiveSetlistStateInterface } from './activeBoard/types'
import { SetlistStateInterface } from './setlist/constants'
import { LyricsStateInterface } from './lyrics/constants'
import { ModalStateInterface } from './modal/constants'
import { SidemenuStateInterface } from './sidemenu/types'
import { UsersStateInterface } from './users/typesUsers'
import { SpotifyStateInterface } from './spotify/types'
import { PlaylistStateInterface } from './list/constants'

export interface RootStateInterface {
  auth: AuthStateInterface
  activeBoard: ActiveSetlistStateInterface
  activeList: TrackInterface
  setlist: SetlistStateInterface
  list: PlaylistStateInterface
  lyrics: LyricsStateInterface
  theme: string
  modal: ModalStateInterface
  sidemenu: SidemenuStateInterface
  users: UsersStateInterface
  spotify: SpotifyStateInterface
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
