import { IS_ACTIVE, SET_ACTIVE_LIST, CLEAR, MUTATE_ACTIVE_LIST } from './constants'
import { PayLoad } from '../types'

export const activeSong = (song: any) => (dispatch: any, state: any) => {
  dispatch(setCurrentSong(song))
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