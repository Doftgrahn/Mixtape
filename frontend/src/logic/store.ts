import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

export default (initialState: any) => {
  const storage = window.localStorage.getItem('state')
  initialState = storage !== null ? JSON.parse(storage) : initialState
  // initialState: any = JSON.parse(window.localStorage.getItem('state')) || state

  //  initialState = JSON.parse(storage)
  //const storage = JSON.parse(window.localStorage.getItem('state'))

  const middleware = [thunk]

  const composeEnhancers: any = compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
  store.subscribe(() => {
    const state = store.getState()

    const persist = {}
    window.localStorage.setItem('state', JSON.stringify(persist))
  })
  return store
}
