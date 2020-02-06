import { ACTIVE_BOARD, USER_NAME, ActiveBoardInterface } from './types'

const initialState: ActiveBoardInterface = {
  activeBoard: ''
}
export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return {
        ...state,
        activeBoard: action.payload
      }
    case USER_NAME:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}
