import React, { FC, useEffect, Suspense } from 'react'
import { connect, useDispatch } from 'react-redux'

import ReactGA from 'react-ga'
import './styles/App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import authlocalstorage from './utils/AuthLocalStorage/authlocalstorage'
import Routes from './routes/routes'

import { lightTheme, darkTheme } from './utils/colors/colors'
import { getActiveUser } from './logic/auth/authAction'

import { AppInterface } from './types/propTypes'

import Spinner from './components/shared/spinner/spinner'

ReactGA.initialize('UA-153619692-2')
const browserHistory = createBrowserHistory()
browserHistory.listen((location, _action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App: FC<AppInterface> = ({ theme }) => {
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
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    Object.keys(currentTheme).forEach(key => {
      const value = currentTheme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }, [theme])

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  theme: state.theme.state
})

export default connect(mapStateToProps)(App)
