import { GET_ERRORS } from './contants'
import { PayLoad } from '../types'

const initialState = {}

export default function(state = initialState, action: PayLoad) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload
    default:
      return state
  }
}
