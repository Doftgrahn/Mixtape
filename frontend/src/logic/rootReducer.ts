import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import boardReducer from './board/boardReducer'
import themeReducer from './theme/themeReducer'
export default combineReducers({
  auth: authReducer,
  board: boardReducer,
  theme: themeReducer
})
