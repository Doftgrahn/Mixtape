import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

export default (initialState: any) => {
  const storage = localStorage.getItem('state')
  initialState = storage !== null ? JSON.parse(storage) : initialState

  const middleware = [thunk]

  const composeEnhancers = compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
  store.subscribe(() => {
    const state = store.getState()

    const persist = {
      auth: state.auth,
      activeBoard: state.activeBoard,
      theme: state.theme
    }
    window.localStorage.setItem('state', JSON.stringify(persist))
  })
  return store
}
