import React, { FC, useEffect } from 'react'
import './styles/App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import authlocalstorage from './utils/AuthLocalStorage/authlocalstorage'

import Routes from './routes/routes'
const App: FC<{}> = () => {
  useEffect(() => {
    authlocalstorage()
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
