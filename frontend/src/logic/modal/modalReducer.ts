import { TOOGLE_PLAYLIST_MODAL, TOGGLE_SETLIST_MODAL } from './constants'
import { PayLoad } from '../types'

const initialState = {
  setlistModal: false,
  playlistModal: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case TOGGLE_SETLIST_MODAL:
      return {
        ...state,
        setlistModal: action.payload
      }
    case TOOGLE_PLAYLIST_MODAL:
      return {
        ...state,
        playlistModal: action.payload
      }
    default:
      return state
  }
}
