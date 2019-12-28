import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { RootProps } from './types'

const Root: FC = ({ initialState = {}, children }: RootProps) => (
  <Provider store={store(initialState)}>{children}</Provider>
)

export default Root
