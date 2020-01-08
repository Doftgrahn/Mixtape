import { SET_BOARD } from './constants'
import { PayLoad } from '../types'

const initialState: any = {
  boards: [],
  loading: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload].concat()
      }
    default:
      return state
  }
}
