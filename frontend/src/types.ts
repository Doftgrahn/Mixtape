import { RouteComponentProps } from 'react-router-dom'
import { AuthState } from './logic/types'
import { BoardInterface } from './logic/types'

export interface ProtectedRouteProps extends RouteComponentProps {
  component: any
  auth: AuthState
  exact: boolean
  key?: number
  location: any
  path: any
}

export interface MixtapeProps {
  auth: AuthState
  boards: BoardInterface
}
