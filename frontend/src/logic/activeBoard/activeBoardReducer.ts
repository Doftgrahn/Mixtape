import {
  ACTIVE_BOARD,
  MUTATE_ACTIVE_SETLIST,
  ActiveSetlistStateInterface,
  UNINVITE_ACTIVE_COLLABORATOR
} from './types'

const initialState: ActiveSetlistStateInterface = {
  activeBoard: {
    user: '',
    title: '',
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
    case UNINVITE_ACTIVE_COLLABORATOR:
      return {
        activeBoard: { ...state.activeBoard, collaborators: action.payload }
      }
    default:
      return state
  }
}
