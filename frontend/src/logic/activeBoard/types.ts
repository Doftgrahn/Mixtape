export const ACTIVE_BOARD = 'ACTIVE_BOARD'
export const USER_NAME = 'USER_NAME'
export const MUTATE_ACTIVE_SETLIST = 'MUTATE_ACTIVE_SETLIST'
export const SET_ACTIVE_DESCRIPTION = 'SET_ACTIVE_DESCRIPTION'
export const UNINVITE_ACTIVE_COLLABORATOR = 'UNINVITE_ACTIVE_COLLABORATOR'

interface ActiveSetlistInterface {
  user: string
  title: string
  description: string
  date: string
  collaborators: string[]
  _id: string
  userId: string
  isOwner: boolean
}

export interface ActiveSetlistStateInterface {
  activeBoard: ActiveSetlistInterface
}
