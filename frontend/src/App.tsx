import React, { FC, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import './styles/App.scss'

import authlocalstorage from './utils/AuthLocalStorage/authlocalstorage'
import Routes from './routes/routes'

import { AppModel } from './logic/board/boardAction'
import { lightTheme, darkTheme } from './utils/colors/colors'

const App: FC<any> = ({ auth, theme }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.isAuthenticated) {
      dispatch(AppModel())
    }
    authlocalstorage()
  }, [auth.isAuthenticated, dispatch, id])

  useEffect(() => {
    const currentTheme = theme.state === 'light' ? lightTheme : darkTheme
    Object.keys(currentTheme).forEach(key => {
      const value = currentTheme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }, [theme.state])

  return (
    <div className="App">
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
