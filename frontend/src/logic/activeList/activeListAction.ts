import { IS_ACTIVE, SET_ACTIVE_LIST } from './constants'
import { PayLoad } from '../types'

export const setCurrentSong = (id: string): PayLoad => ({
  type: SET_ACTIVE_LIST,
  payload: id
})

export const setIfActive = (isActive: boolean): PayLoad => ({
  type: IS_ACTIVE,
  payload: isActive
})
