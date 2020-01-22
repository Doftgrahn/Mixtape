import { ACTIVE_BOARD } from './types'
import { PayLoad } from '../types'

export const setActiveBoard = (boardId: string): PayLoad => ({
  type: ACTIVE_BOARD,
  payload: boardId
})
