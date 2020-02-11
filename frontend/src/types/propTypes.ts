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
  list: any
  modal: any
}

export interface SetlistInterface {
  modal: boolean
}
