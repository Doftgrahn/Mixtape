import { PayLoad } from '../types'

import { TOGGLE_USER_PROFILE, TOGGLE_EDIT_SETLIST, TOGGLE_ACTIVE_SONG_MENU } from './types'

const initialState = {
  userprofile: false,
  setlist: false,
  activeTrack: false
}

export default (state = initialState, action: PayLoad) => {
  switch (action.type) {
    case TOGGLE_USER_PROFILE:
      return {
        ...state,
        userprofile: !state.userprofile
      }
    case TOGGLE_EDIT_SETLIST:
      return {
        ...state,
        setlist: !state.setlist
      }
    case TOGGLE_ACTIVE_SONG_MENU:
      return {
        ...state,
        activeTrack: !state.activeTrack
      }
    default:
      return state
  }
}
