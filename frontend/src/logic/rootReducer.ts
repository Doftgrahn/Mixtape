import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import activeBoardReducer from './activeBoard/activeBoardReducer'
import activeListReducer from './activeList/activeListReducer'
import setlistReducer from './setlist/setlistReducer'
import listReducer from './list/listReducer'
import lyricReducer from './lyrics/lyricsReducer'
import themeReducer from './theme/themeReducer'
import modalReducer from './modal/modalReducer'
import usersReducer from './users/usersReducer'
import spotifyReducer from './spotify/spotifyReducer'
import sidemenuReducer from './sidemenu/sidemenuReducer'

export default combineReducers({
  auth: authReducer,
  activeBoard: activeBoardReducer,
  activeList: activeListReducer,
  setlist: setlistReducer,
  list: listReducer,
  lyrics: lyricReducer,
  theme: themeReducer,
  modal: modalReducer,
  sidemenu: sidemenuReducer,
  users: usersReducer,
  spotify: spotifyReducer
})

export type RootState = ReturnType<typeof combineReducers>
