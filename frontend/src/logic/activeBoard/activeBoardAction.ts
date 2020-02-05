import { ACTIVE_BOARD } from './types'
import { PayLoad } from '../types'

export const setActiveBoard = (board: any) => (dispatch: any) => {
  dispatch(activeBoard(board))
}

const activeBoard = (board: any): PayLoad => ({
  type: ACTIVE_BOARD,
  payload: board
})
