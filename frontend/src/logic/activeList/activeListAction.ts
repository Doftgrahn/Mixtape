import {
  IS_ACTIVE,
  SET_ACTIVE_LIST,
  CLEAR,
  MUTATE_ACTIVE_LIST,
  SET_ACTIVE_LYRIC
} from './constants'
import { PayLoad } from '../types'

export const activeSong = (id: string) => (dispatch: any, state: any) => {
  const currentSongFromState = state().list.list.find((x: any) => x._id === id)
  dispatch(setCurrentSong(currentSongFromState))
  dispatch(setIfActive(true))
}

export const setCurrentSong = (song: any): PayLoad => ({
  type: SET_ACTIVE_LIST,
  payload: song
})

export const mutateCurrentSong = (song: string) => ({
  type: MUTATE_ACTIVE_LIST,
  payload: song
})

export const setIfActive = (isActive: boolean): PayLoad => ({
  type: IS_ACTIVE,
  payload: isActive
})

export const clearAndHide = () => ({
  type: CLEAR
})

export const setLyricInActiveSong = (song: string) => ({
  type: SET_ACTIVE_LYRIC,
  payload: song
})
