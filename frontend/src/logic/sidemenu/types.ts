export const TOGGLE_USER_PROFILE = 'TOGGLE_USER_PROFILE'
export const TOGGLE_EDIT_SETLIST = 'TOGGLE_EDIT_SETLIST'
export const TOGGLE_ACTIVE_SONG_MENU = 'TOGGLE_ACTIVE_SONG_MENU'
export const CLEAN_ALL_SIDEMENUS = 'CLEAN_ALL_SIDEMENUS'

export interface SidemenuStateInterface {
  userprofile: boolean
  setlist: boolean
  activeTrack: boolean
}
