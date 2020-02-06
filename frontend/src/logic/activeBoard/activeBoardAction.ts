import { ACTIVE_BOARD, MUTATE_ACTIVE_SETLIST } from './types'
import { PayLoad } from '../types'

export const setActiveBoard = (board: any): PayLoad => ({
  type: ACTIVE_BOARD,
  payload: board
})

export const mutateActiveSetlistTitle = (title: string): PayLoad => ({
  type: MUTATE_ACTIVE_SETLIST,
  payload: title
})
