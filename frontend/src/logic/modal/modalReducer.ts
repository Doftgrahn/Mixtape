import {
  TOOGLE_PLAYLIST_MODAL,
  TOGGLE_SETLIST_MODAL,
  TOGGlE_LYRIC_MODAL,
  TOGGLE_SPOTIFY_MODAL
} from './constants'
import { PayLoad } from '../types'

const initialState = {
  setlistModal: false,
  playlistModal: false,
  lyricModal: false,
  spotifyModal: false
}

export default (state = initialState, action: PayLoad) => {
  const { payload } = action
  switch (action.type) {
    case TOGGLE_SETLIST_MODAL:
      return {
        ...state,
        setlistModal: payload
      }
    case TOOGLE_PLAYLIST_MODAL:
      return {
        ...state,
        playlistModal: payload
      }
    case TOGGlE_LYRIC_MODAL:
      return {
        ...state,
        lyricModal: payload
      }
    case TOGGLE_SPOTIFY_MODAL:
      return {
        ...state,
        spotifyModal: payload
      }
    default:
      return state
  }
}
