import { ACTIVE_BOARD } from './constants'

export const setActiveBoard = (boardId: string) => ({
  type: ACTIVE_BOARD,
  payload: boardId
})
