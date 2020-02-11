import {
  ACTIVE_BOARD,
  MUTATE_ACTIVE_SETLIST,
  ActiveSetlistStateInterface,
  UNINVITE_ACTIVE_COLLABORATOR,
  SET_ACTIVE_DESCRIPTION
} from './types'

const initialState: ActiveSetlistStateInterface = {
  activeBoard: {
    user: '',
    title: '',
    description: '',
    date: '',
    collaborators: [],
    _id: '',
    userId: '',
    isOwner: false
  }
}
export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return {
        activeBoard: action.payload
      }
    case MUTATE_ACTIVE_SETLIST:
      return {
        activeBoard: { ...state.activeBoard, title: action.payload }
      }
    case SET_ACTIVE_DESCRIPTION:
      return {
        ...state,
        activeBoard: { ...state.activeBoard, description: action.payload }
      }
    case UNINVITE_ACTIVE_COLLABORATOR:
      return {
        activeBoard: { ...state.activeBoard, collaborators: action.payload }
      }
    default:
      return state
  }
}
