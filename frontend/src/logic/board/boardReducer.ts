import { SET_BOARD } from './constants'
import { PayLoad } from '../types'

import { BoardInterface } from '../types'

const initialState: BoardInterface = {
  userId: '',
  title: '',
  isLoading: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        state: action.payload
      }
    default:
      return state
  }
}
