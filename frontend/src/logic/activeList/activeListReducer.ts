import {
  SET_ACTIVE_LIST,
  IS_ACTIVE,
  CLEAR,
  MUTATE_ACTIVE_LIST,
  SET_ACTIVE_LYRIC
} from './constants'

const initialState = {
  current: {},
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
    case MUTATE_ACTIVE_LIST:
      return {
        ...state,
        current: {
          ...state.current,
          title: action.payload
        }
      }
    case SET_ACTIVE_LYRIC:
      return {
        ...state,
        current: { ...state.current, lyrics: action.payload }
      }

    case CLEAR:
      return {
        ...state,
        isActive: false
      }

    default:
      return state
  }
}
