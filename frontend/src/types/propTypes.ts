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
  isLoading: boolean
  modal: any
}

export interface SetlistProps {
  modal: boolean
  collaborators: [string]
}
