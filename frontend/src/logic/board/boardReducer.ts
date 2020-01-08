import { SET_BOARD } from './constants'
import { PayLoad } from '../types'

const initialState: any = {
  data: []
}

export default (state = initialState, action: PayLoad) => {
  console.log('data', state.data)

  switch (action.type) {
    case SET_BOARD:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}
