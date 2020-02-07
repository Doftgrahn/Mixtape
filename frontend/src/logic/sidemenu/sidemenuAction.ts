import { TOGGLE_USER_PROFILE, TOGGLE_EDIT_SETLIST, TOGGLE_ACTIVE_SONG_MENU } from './types'

export const toggleUserProfile = () => ({ type: TOGGLE_USER_PROFILE })

export const toggleEditSetlist = () => ({ type: TOGGLE_EDIT_SETLIST })

export const toggleActive = () => ({ type: TOGGLE_ACTIVE_SONG_MENU })
