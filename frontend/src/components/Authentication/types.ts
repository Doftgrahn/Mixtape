import { AuthState } from '../../logic/types'
import { RouteComponentProps } from 'react-router-dom'
export interface LoginProps {
  auth: AuthState
  errors: object | any
  history?: any
}
