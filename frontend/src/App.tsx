import React, { FC, useEffect } from 'react'
import ReactGA from 'react-ga'
import './styles/App.scss'

import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { connect, useDispatch } from 'react-redux'

import authlocalstorage from './utils/AuthLocalStorage/authlocalstorage'
import Routes from './routes/routes'

import { lightTheme, darkTheme } from './utils/colors/colors'
import { getActiveUser } from './logic/auth/authAction'

ReactGA.initialize('UA-153619692-2')
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App: FC<any> = ({ theme }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    authlocalstorage()
  }, [])

  useEffect(() => {
    dispatch(getActiveUser())
  }, [dispatch])

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
