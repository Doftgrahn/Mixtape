import { TOGGLE_SETLIST_MODAL, TOOGLE_PLAYLIST_MODAL, TOGGlE_LYRIC_MODAL } from './constants'

export const showSetlistModal = () => ({
  type: TOGGLE_SETLIST_MODAL,
  payload: true
})

export const closeSetlistModal = () => ({
  type: TOGGLE_SETLIST_MODAL,
  payload: false
})

export const showPlaylistModal = () => ({
  type: TOOGLE_PLAYLIST_MODAL,
  payload: true
})

export const closePlaylistModal = () => ({
  type: TOOGLE_PLAYLIST_MODAL,
  payload: false
})

export const showLyricModal = () => ({
  type: TOGGlE_LYRIC_MODAL,
  payload: true
})

export const closeLyricModal = () => ({
  type: TOGGlE_LYRIC_MODAL,
  payload: false
})
