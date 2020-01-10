import { SET_BOARD, DELETE_BOARD, IS_LOADING, ACTIVE_BOARD } from './constants'

const initialState: any = {
  activeBoard: '',
  boards: [],
  list: [],
  loading: false
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return {
        ...state,
        activeBoard: action.payload
      }
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
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state
  }
}
