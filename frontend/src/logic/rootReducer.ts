import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import boardReducer from './board/boardReducer'
import themeReducer from './theme/themeReducer'
export default combineReducers({
  auth: auth,
  board: boardReducer,
  theme: themeReducer
})
