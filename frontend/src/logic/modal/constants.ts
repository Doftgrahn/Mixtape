export const TOOGLE_PLAYLIST_MODAL = 'TOOGLE_PLAYLIST_MODAL'
export const TOGGLE_SETLIST_MODAL = 'TOGGLE_SETLIST_MODAL'
export const TOGGlE_LYRIC_MODAL = 'TOGGlE_LYRIC_MODAL'
export const TOGGLE_SPOTIFY_MODAL = 'TOGGLE_SPOTIFY_MODAL'

export interface ModalStateInterface {
  setlistModal: boolean
  playlistModal: boolean
  lyricModal: boolean
  spotifyModal: boolean
}
