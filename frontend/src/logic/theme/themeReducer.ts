import { PayLoad } from '../types'
import { SET_DARK_THEME, SET_LIGHT_THEME, Theme } from './constants'

const initialState: any = Theme.LIGHT

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        state: action.payload
      }
    case SET_DARK_THEME:
      return {
        state: action.payload
      }
    default:
      return state
  }
}
