import { SET_ACTIVE_LIST, MUTATE_ACTIVE_LIST, SET_ACTIVE_LYRIC } from './types'
import { PayLoad } from '../types'
import { TrackInterface } from '../list/constants'

const initialState: TrackInterface = {
  title: '',
  date: '',
  _id: '',
  boardId: '',
  userId: '',
  spotifyTrackID: '',
  uri: '',
  lyrics: ''
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case SET_ACTIVE_LIST:
      return action.payload
    case MUTATE_ACTIVE_LIST:
      return { ...state, title: action.payload }
    case SET_ACTIVE_LYRIC:
      return { ...state, lyrics: action.payload }
    default:
      return state
  }
}
