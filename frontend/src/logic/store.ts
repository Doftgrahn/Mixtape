import { compose, createStore, applyMiddleware, Store, AnyAction } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'

export default (initialState: object) => {
  const storage = localStorage.getItem('state')

  initialState = storage !== null ? JSON.parse(storage) : initialState

  const middleware = [thunk]

  const composeEnhancers = composeWithDevTools || compose

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
      setlist: state.setlist,
      theme: state.theme
    }

    window.localStorage.setItem('state', JSON.stringify(persist))
  })
  return store as Store
}
