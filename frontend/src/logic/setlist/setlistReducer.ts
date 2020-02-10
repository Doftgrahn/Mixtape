import {
  GET_BOARDS,
  GET_COLLABORATOR_SETLIST,
  DELETE_BOARD,
  IS_LOADING,
  CLEAR_SETLIST,
  CREATE_BOARD,
  SET_SETLIST_ERRORS,
  MUTATE_SETLIST,
  INVITE_COLLABORATOR,
  LEAVE_SETLIST,
  UNINVITE_COLLABORSTOR,
  SetlistStateInterface
} from './constants'
import { PayLoad } from '../types'

const initialState: SetlistStateInterface = {
  boards: [],
  collaborators: [],
  loading: false,
  errors: {}
}

export default (state = initialState, action: PayLoad) => {
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
    case GET_COLLABORATOR_SETLIST:
      return {
        ...state,
        collaborators: action.payload
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
    case MUTATE_SETLIST:
      return {
        ...state,
        boards: state.boards.map((setlist: any) => {
          if (setlist._id === action.payload.id) {
            return { ...setlist, title: action.payload.title }
          }
          return setlist
        })
      }
    case INVITE_COLLABORATOR:
      return {
        ...state,
        boards: state.boards.map((setlist: any) => {
          if (setlist._id === action.payload._id) {
            return { ...setlist, collaborators: action.payload.collaborators }
          }
          return setlist
        })
      }
    case UNINVITE_COLLABORSTOR:
      return {
        ...state,
        boards: state.boards.map((setlist: any) => {
          if (setlist._id === action.payload.currentSetlist) {
            return { ...setlist, collaborators: action.payload.collaborators }
          }
          return setlist
        })
      }
    case LEAVE_SETLIST:
      return {
        ...state,
        collaborators: state.collaborators.filter(
          (setlist: any) => setlist._id !== action.payload._id
        )
      }
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_SETLIST_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case CLEAR_SETLIST:
      return {
        ...state
        //   boards: []
      }
    default:
      return state
  }
}
