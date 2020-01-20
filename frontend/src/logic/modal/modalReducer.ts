import { TOOGLE_PLAYLIST_MODAL, TOGGLE_SETLIST_MODAL, TOGGlE_LYRIC_MODAL } from './constants'
import { PayLoad } from '../types'

const initialState = {
  setlistModal: false,
  playlistModal: false,
  lyricModal: false
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
    case TOGGlE_LYRIC_MODAL:
      return {
        ...state,
        lyricModal: action.payload
      }
    default:
      return state
  }
}
