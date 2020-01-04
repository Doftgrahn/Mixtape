import React, { FC } from 'react'
import styles from './styles/App.module.scss'
import { BrowserRouter as Router } from 'react-router-dom'

const App: FC = () => {
  return (
    <div className={styles.App}>
      <Router>
        hej osv hheehe
        <h1>Mix</h1>
      </Router>
    </div>
  )
}

export default App
