import React, { FC } from 'react'
import './styles/App.scss'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes/routes'
const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
