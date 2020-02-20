import { PayLoad } from '../types'

import {
  TOGGLE_USER_PROFILE,
  TOGGLE_EDIT_SETLIST,
  TOGGLE_ACTIVE_SONG_MENU,
  CLEAN_ALL_SIDEMENUS,
  SidemenuStateInterface
} from './types'

const initialState: SidemenuStateInterface = {
  userprofile: false,
  setlist: false,
  activeTrack: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case TOGGLE_USER_PROFILE:
      return {
        ...state,
        userprofile: !state.userprofile,
        setlist: false,
        activeTrack: false
      }
    case TOGGLE_EDIT_SETLIST:
      return {
        ...state,
        userprofile: false,
        setlist: !state.setlist,
        activeTrack: false
      }
    case TOGGLE_ACTIVE_SONG_MENU:
      return {
        ...state,
        userprofile: false,
        setlist: false,
        activeTrack: !state.activeTrack
      }
    case CLEAN_ALL_SIDEMENUS:
      return {
        ...state,
        userprofile: false,
        setlist: false,
        activeTrack: false
      }
    default:
      return state
  }
}
