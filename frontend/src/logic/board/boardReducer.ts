import { SET_BOARD, CREATE_BOARD } from './constants'
import { PayLoad } from '../types'

const initialState: any = {
  boards: [],
  loading: false
}

export default (state = initialState, action: PayLoad) => {
  console.log(action.payload)

  switch (action.type) {
    case SET_BOARD:
      const { payload } = action
      return {
        ...state,
        boards: [...state.boards, payload].flat()
      }
    case CREATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, payload].flat()
      }
    default:
      return state
  }
}
