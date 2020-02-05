import { ACTIVE_BOARD, USER_NAME } from './types'
import { PayLoad } from '../types'

export const setActiveBoard = (board: any) => (dispatch: any) => {
  dispatch(activeBoard(board._id))
  dispatch(setUser(board.user))
}

const activeBoard = (board: any): PayLoad => ({
  type: ACTIVE_BOARD,
  payload: board
})

const setUser = (user: string): PayLoad => ({
  type: USER_NAME,
  payload: user
})
