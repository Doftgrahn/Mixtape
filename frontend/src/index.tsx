import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import { unregister } from './utils/ServiceWorker/serviceWorker'
import Root from './logic/root'

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root') as HTMLElement
)

unregister()
