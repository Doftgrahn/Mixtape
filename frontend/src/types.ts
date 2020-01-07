import { RouteProps } from 'react-router-dom'
import { AuthState } from './logic/types'
export interface Props {
  hej: string
}

export interface ProtectedRouteProps extends RouteProps {
  component: any
  auth: AuthState
}
