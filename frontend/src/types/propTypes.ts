import { RouteComponentProps } from 'react-router-dom'

export interface AppInterface {
  theme: string
}

export interface LandingInterface {
  auth: any
}

interface MatchParams {
  title: string
  modal: any
}

export interface PlaylistInterface extends RouteComponentProps<MatchParams> {
  auth: any
  list: any
  modal: any
  activeSetlist: any
}

export interface SetlistInterface {
  modal: boolean
}
