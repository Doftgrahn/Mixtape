import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import activeBoardReducer from './activeBoard/activeBoardReducer'
import activeListReducer from './activeList/activeListReducer'
import boardReducer from './board/boardReducer'
import listReducer from './list/listReducer'
import themeReducer from './theme/themeReducer'

export default combineReducers({
  auth: authReducer,
  activeBoard: activeBoardReducer,
  activeList: activeListReducer,
  board: boardReducer,
  list: listReducer,
  theme: themeReducer
})
