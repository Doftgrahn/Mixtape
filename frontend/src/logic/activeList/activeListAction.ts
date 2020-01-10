import { IS_ACTIVE, SET_ACTIVE_LIST, CLEAR } from './constants'
import { PayLoad } from '../types'

export const setCurrentSong = (song: any): PayLoad => ({
  type: SET_ACTIVE_LIST,
  payload: song
})

export const setIfActive = (isActive: boolean): PayLoad => ({
  type: IS_ACTIVE,
  payload: isActive
})

export const clearAndHide = () => ({
  type: CLEAR
})
