import {
  TOGGLE_USER_PROFILE,
  TOGGLE_EDIT_SETLIST,
  TOGGLE_ACTIVE_SONG_MENU,
  CLEAN_ALL_SIDEMENUS
} from './types'

export const toggleUserProfile = () => ({ type: TOGGLE_USER_PROFILE })
export const toggleEditSetlist = () => ({ type: TOGGLE_EDIT_SETLIST })
export const toggleActiveTrack = () => ({ type: TOGGLE_ACTIVE_SONG_MENU })
export const cleanAllSideMenus = () => ({ type: CLEAN_ALL_SIDEMENUS })
