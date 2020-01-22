import { GET_BOARDS, DELETE_BOARD, IS_LOADING, CLEAR_SETLIST, CREATE_BOARD } from './constants'

const initialState: any = {
  boards: [],
  loading: false
}

export default (state = initialState, action: any) => {
  const { payload } = action

  switch (action.type) {
    case GET_BOARDS:
      return {
        ...state,
        boards: payload.slice().sort((a: any, b: any) => {
          const first = new Date(b.date).getTime()
          const second = new Date(a.date).getTime()
          return first - second
        })
      }

    case CREATE_BOARD:
      return {
        ...state,
        boards: [payload, ...state.boards].flat()
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
    case CLEAR_SETLIST:
      return {
        ...state,
        boards: []
      }

    default:
      return state
  }
}
