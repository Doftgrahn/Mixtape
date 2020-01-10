import { GET_BOARDS, DELETE_BOARD, IS_LOADING } from './constants'

const initialState: any = {
  boards: [],
  loading: false
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BOARDS:
      const { payload } = action
      return {
        ...state,
        boards: [...state.boards, payload].flat()
      }
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board: any) => board._id !== action.payload)
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
