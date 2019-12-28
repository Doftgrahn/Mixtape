import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { unregister } from './serviceWorker'
import Root from './logic/root'

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
)

unregister()
