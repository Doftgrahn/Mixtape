import { ACTIVE_BOARD, MUTATE_ACTIVE_SETLIST, ActiveSetlistStateInterface } from './types'

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
  console.log(state)
  switch (action.type) {
    case ACTIVE_BOARD:
      return {
        activeBoard: action.payload
      }
    case MUTATE_ACTIVE_SETLIST:
      return {
        activeBoard: { ...state.activeBoard, title: action.payload }
      }
    default:
      return state
  }
}
