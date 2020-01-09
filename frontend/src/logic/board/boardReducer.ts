import { SET_BOARD, DELETE_BOARD } from './constants'
import { PayLoad } from '../types'

const initialState: any = {
  boards: [],
  loading: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case SET_BOARD:
      const { payload } = action
      return {
        ...state,
        boards: [...state.boards, payload].flat()
      }
    case DELETE_BOARD:
      return {
        ...state,
        boards: [...state.boards, payload]
      }

    default:
      return state
  }
}
