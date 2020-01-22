import { RouteComponentProps } from 'react-router-dom'
import { AuthState } from './logic/types'

export interface AppInterface {
  theme: string
}

export interface LandingInterface {
  auth: AuthState
}

interface MatchParams {
  title: string
  modal: any
}

export interface PlaylistInterface extends RouteComponentProps<MatchParams> {
  auth: AuthState
  list: any
  modal: any
}
