import { PayLoad } from '../types'
import { SET_DARK_THEME, SET_LIGHT_THEME } from './constants'

const initialState: any = 'light'

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        state: action.type
      }
    case SET_DARK_THEME:
      return {
        ...state,
        state: action.type
      }
    default:
      return state
  }
}
