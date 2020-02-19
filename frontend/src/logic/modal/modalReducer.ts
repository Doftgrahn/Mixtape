import {
  TOOGLE_PLAYLIST_MODAL,
  TOGGLE_SETLIST_MODAL,
  TOGGlE_LYRIC_MODAL,
  TOGGLE_SPOTIFY_MODAL,
  ModalStateInterface,
  CLOSE_MODALS
} from './constants'
import { PayLoad } from '../types'

const initialState: ModalStateInterface = {
  setlistModal: false,
  playlistModal: false,
  lyricModal: false,
  spotifyModal: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case TOGGLE_SETLIST_MODAL:
      return {
        ...state,
        setlistModal: !state.setlistModal
      }
    case TOOGLE_PLAYLIST_MODAL:
      return {
        ...state,
        playlistModal: !state.playlistModal
      }
    case TOGGlE_LYRIC_MODAL:
      return {
        ...state,
        lyricModal: !state.lyricModal
      }
    case TOGGLE_SPOTIFY_MODAL:
      return {
        ...state,
        spotifyModal: !state.spotifyModal
      }
    case CLOSE_MODALS:
      return {
        setlistModal: false,
        playlistModal: false,
        lyricModal: false,
        spotifyModal: false
      }
    default:
      return state
  }
}
