import {
  ACTIVE_BOARD,
  MUTATE_ACTIVE_SETLIST,
  UNINVITE_ACTIVE_COLLABORATOR,
  SET_ACTIVE_DESCRIPTION,
  CLEAR_ACTIVE_SETLIST
} from './types'
import { PayLoad } from '../types'

export const setActiveBoard = (board: any): PayLoad => ({
  type: ACTIVE_BOARD,
  payload: board
})

export const mutateActiveSetlistTitle = (title: string): PayLoad => ({
  type: MUTATE_ACTIVE_SETLIST,
  payload: title
})

export const uninviteFromActiveSetlist = (data: any) => ({
  type: UNINVITE_ACTIVE_COLLABORATOR,
  payload: data
})

export const setDescription = (description: string): PayLoad => ({
  type: SET_ACTIVE_DESCRIPTION,
  payload: description
})

export const clearActiveSetlist = () => ({
  type: CLEAR_ACTIVE_SETLIST
})
