import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import './styles/App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import authlocalstorage from './utils/AuthLocalStorage/authlocalstorage'
import Routes from './routes/routes'
import { AppModel } from './logic/board/boardAction'

const App: FC<any> = ({ auth, theme }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.isAuthenticated) {
      dispatch(AppModel(id))
    }
    authlocalstorage()
  }, [auth.isAuthenticated, dispatch, id])

  const Theme = () => {
    if (theme.state === 'light') {
      return 'light'
    } else {
      return 'dark'
    }
  }

  return (
    <div className={`App ${Theme()}`}>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  theme: state.theme
})

export default connect(mapStateToProps)(App)
