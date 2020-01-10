import { AuthState } from '../../logic/types'

export interface LoginProps {
  auth: AuthState
  errors: object | any
  history?: any
}
