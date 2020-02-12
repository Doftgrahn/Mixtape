export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST'
export const MUTATE_ACTIVE_LIST = 'MUTATE_ACTIVE_LIST'
export const IS_ACTIVE = 'IS_ACTIVE'
export const CLEAR = 'CLEAR'
export const SET_ACTIVE_LYRIC = 'SET_ACTIVE_LYRIC'

interface ActiveTrackInterface {
  title: string
  date: string
  _id: string
  boardId: string
  userId: string
  spotifyTrackID: string
}

export interface ActivePlaylistStateInterface {
  current: ActiveTrackInterface
  isActive: boolean
}
