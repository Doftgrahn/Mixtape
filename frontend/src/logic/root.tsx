import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store from './store'

const Root: FC<any> = ({ initialState = {}, children }) => (
  <Provider store={store(initialState)}>{children}</Provider>
)

export default Root
