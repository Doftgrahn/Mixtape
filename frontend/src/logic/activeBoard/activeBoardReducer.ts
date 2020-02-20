import {
  ACTIVE_BOARD,
  MUTATE_ACTIVE_SETLIST,
  ActiveSetlistStateInterface,
  UNINVITE_ACTIVE_COLLABORATOR,
  SET_ACTIVE_DESCRIPTION,
  CLEAR_ACTIVE_SETLIST
} from './types'
import { PayLoad } from '../types'

const initialState: ActiveSetlistStateInterface = {
  user: '',
  title: '',
  description: '',
  date: '',
  collaborators: [],
  _id: '',
  userId: '',
  isOwner: false
}
export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return action.payload

    case MUTATE_ACTIVE_SETLIST:
      return { ...state, title: action.payload }

    case SET_ACTIVE_DESCRIPTION:
      return { ...state, description: action.payload }

    case UNINVITE_ACTIVE_COLLABORATOR:
      return { ...state, collaborators: action.payload }
    case CLEAR_ACTIVE_SETLIST:
      return {
        user: '',
        title: '',
        description: '',
        date: '',
        collaborators: [],
        _id: '',
        userId: '',
        isOwner: false
      }

    default:
      return state
  }
}
