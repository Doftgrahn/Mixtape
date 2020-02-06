export const ACTIVE_BOARD = 'ACTIVE_BOARD'
export const USER_NAME = 'USER_NAME'
export const MUTATE_ACTIVE_SETLIST = 'MUTATE_ACTIVE_SETLIST'

interface ActiveSetlistInterface {
  user: string
  title: string
  date: string
  collaborators: string[]
  _id: string
  userId: string
  isOwner: boolean
}

export interface ActiveSetlistStateInterface {
  activeBoard: ActiveSetlistInterface
}
