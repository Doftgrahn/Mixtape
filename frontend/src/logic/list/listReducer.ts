import { PayLoad } from '../types'
import {
  GET_LIST,
  ADD_LIST,
  IS_LOADING,
  DELETE_LIST_ITEM,
  MUTATE_LIST,
  SET_LYRIC,
  MOVE_PLAYLIST_ITEM,
  SET_REFERENCE_LIST,
  SET_PLAYLIST_ERROR,
  CLEAR_TRACKS,
  PlaylistStateInterface
} from './constants'

const initialState: PlaylistStateInterface = {
  list: [],
  isLoading: false,
  referenceList: [],
  errors: {}
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      }
    case ADD_LIST:
      return {
        ...state,
        list: [...state.list, action.payload].flat()
      }
    case DELETE_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((list: any) => list._id !== action.payload)
      }
    case MUTATE_LIST:
      return {
        ...state,
        list: state.list.map((list: any) => {
          if (list._id === action.payload.id) {
            return { ...list, title: action.payload.title }
          }
          return list
        })
      }
    case MOVE_PLAYLIST_ITEM:
      return {
        ...state,
        list: action.payload
      }
    case SET_REFERENCE_LIST:
      return {
        ...state,
        referenceList: [...action.payload]
      }
    case SET_LYRIC:
      return {
        ...state,
        list: state.list.map((list: any) => {
          if (list._id === action.payload._id) {
            return { ...list, lyrics: action.payload.lyrics }
          }
          return list
        })
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_PLAYLIST_ERROR:
      return {
        ...state,
        errors: action.payload
      }

    case CLEAR_TRACKS:
      return {
        ...state,
        list: [],
        referenceList: []
      }
    default:
      return state
  }
}
