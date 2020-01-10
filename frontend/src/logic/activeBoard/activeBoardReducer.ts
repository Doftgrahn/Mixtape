import { ACTIVE_BOARD } from './constants'

const initialState = {
  activeBoard: ''
}
export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return {
        activeBoard: action.payload
      }

    default:
      return state
  }
}
