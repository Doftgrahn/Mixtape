export const GET_BOARDS = 'GET_BOARD'
export const GET_COLLABORATOR_SETLIST = 'GET_COLLABORATOR_SETLIST'

export const CREATE_BOARD = 'CREATE_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'
export const MUTATE_SETLIST = 'MUTATE_SETLIST'

export const INVITE_COLLABORATOR = 'INVITE_COLLABORATOR'
export const LEAVE_SETLIST = 'LEAVE_SETLIST'

export const IS_LOADING = 'IS_LOADING'
export const CLEAR_SETLIST = 'CLEAR_SETLIST'
export const SET_SETLIST_ERRORS = 'SET_SETLIST_ERRORS'

interface SetlistInterface {
  date: string
  _id: string
  userId: string
  user: string
  title: string
  isOwner?: boolean
}

export interface SetlistStateInterface {
  boards: SetlistInterface[]
  collaborators: SetlistInterface[]
  loading: false
  errors: object
}
