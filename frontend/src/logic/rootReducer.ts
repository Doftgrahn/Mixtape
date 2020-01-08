import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import boardReducer from './board/boardReducer'
export default combineReducers({
  auth: auth,
  board: boardReducer
})
