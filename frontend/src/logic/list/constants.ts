export const ACTIVE_BOARD = 'ACTIVE_BOARD'
export const GET_LIST = 'GET_LIST'
export const ADD_LIST = 'ADD_LIST'
export const MUTATE_LIST = 'MUTATE_LIST'
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'
export const IS_LOADING = 'IS_LOADING'

export const SET_PLAYLIST_ERROR = 'SET_PLAYLIST_ERROR'

export const MOVE_PLAYLIST_ITEM = 'MOVE_PLAYLIST_ITEM'
export const SET_REFERENCE_LIST = 'SET_REFERENCE_LIST'

export const SET_LYRIC = 'SET_LYRIC'

export const CLEAR_TRACKS = 'CLEAR_TRACKS'

interface TrackInterface {
  title: string
  date: string
  _id: string
  boardId: string
  userId: string
}

export interface PlaylistStateInterface {
  list: TrackInterface[]
  isLoading: boolean
  referenceList: TrackInterface[]
  errors: object
}
