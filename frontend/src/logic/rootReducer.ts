import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import activeBoardReducer from './activeBoard/activeBoardReducer'
import boardReducer from './board/boardReducer'
import listReducer from './list/listReducer'
import themeReducer from './theme/themeReducer'
export default combineReducers({
  auth: authReducer,
  activeBoard: activeBoardReducer,
  board: boardReducer,
  list: listReducer,
  theme: themeReducer
})
