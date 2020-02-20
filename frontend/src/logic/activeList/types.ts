export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST'
export const MUTATE_ACTIVE_LIST = 'MUTATE_ACTIVE_LIST'
export const IS_ACTIVE = 'IS_ACTIVE'
export const CLEAR = 'CLEAR'
export const SET_ACTIVE_LYRIC = 'SET_ACTIVE_LYRIC'

export interface ActiveTrackStateInterface {
  title: string
  date: string
  _id: string
  boardId: string
  userId: string
  spotifyTrackID: string
  uri: string
  lyrics: string
}
