import { RouteComponentProps } from 'react-router-dom'
import { AuthState } from './logic/types'
import { BoardInterface } from './logic/types'

export interface MixtapeProps {
  auth: AuthState
  allBoards: BoardInterface
}
