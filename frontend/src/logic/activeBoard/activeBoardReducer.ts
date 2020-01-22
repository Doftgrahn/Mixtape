import { ACTIVE_BOARD, ActiveBoardInterface } from './types'

const initialState: ActiveBoardInterface = {
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
