import {
  TOGGLE_SETLIST_MODAL,
  TOOGLE_PLAYLIST_MODAL,
  TOGGlE_LYRIC_MODAL,
  TOGGLE_SPOTIFY_MODAL
} from './constants'
import { PayLoad } from '../types'

// Setlist Modal
export const showSetlistModal = (): PayLoad => ({
  type: TOGGLE_SETLIST_MODAL,
  payload: true
})

export const closeSetlistModal = (): PayLoad => ({
  type: TOGGLE_SETLIST_MODAL,
  payload: false
})

// Playlist Modal
export const showPlaylistModal = (): PayLoad => ({
  type: TOOGLE_PLAYLIST_MODAL,
  payload: true
})

export const closePlaylistModal = (): PayLoad => ({
  type: TOOGLE_PLAYLIST_MODAL,
  payload: false
})

// Lyrics MOdal
export const showLyricModal = (): PayLoad => ({
  type: TOGGlE_LYRIC_MODAL,
  payload: true
})

export const closeLyricModal = (): PayLoad => ({
  type: TOGGlE_LYRIC_MODAL,
  payload: false
})

// Spotify Modal

export const showSpotifyModal = (): PayLoad => ({
  type: TOGGLE_SPOTIFY_MODAL,
  payload: true
})

export const hideSpotifyModal = (): PayLoad => ({
  type: TOGGLE_SPOTIFY_MODAL,
  payload: false
})
