import { SET_ACTIVE_LIST, IS_ACTIVE } from './constants'

const initialState = {
  current: '',
  isActive: false
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_LIST:
      return {
        ...state,
        current: action.payload
      }
    case IS_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      }
    default:
      return state
  }
}
