import {
  TOGGLE_SETLIST_MODAL,
  TOOGLE_PLAYLIST_MODAL,
  TOGGlE_LYRIC_MODAL,
  TOGGLE_SPOTIFY_MODAL,
  CLOSE_MODALS,
  ModalAction
} from './constants'

// Setlist Modal
export const toggleSetlistModal = (): ModalAction => ({ type: TOGGLE_SETLIST_MODAL })

// Playlist Modal
export const togglePlaylistModal = (): ModalAction => ({ type: TOOGLE_PLAYLIST_MODAL })

// Lyrics MOdal
export const toggleLyricsModal = (): ModalAction => ({ type: TOGGlE_LYRIC_MODAL })

// Spotify Modal
export const toggleSpotifyModal = (): ModalAction => ({ type: TOGGLE_SPOTIFY_MODAL })

export const closeModals = (): ModalAction => ({ type: CLOSE_MODALS })
