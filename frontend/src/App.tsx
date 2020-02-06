import React, { FC, useEffect, Suspense } from 'react'
import './styles/App.scss'

import { connect, useDispatch } from 'react-redux'
import Routes from './routes/routes'
import ReactGA from 'react-ga'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { lightTheme, darkTheme } from './utils/colors/colors'
import { getActiveUser } from './logic/auth/authAction'

//Used for later?
//import checkSpotifyToken from './utils/checkSpotifyToken/checkSpotifyToken'
//import checkGoogleToken from './utils/checkGoogleToken/checkGoogleToken'

import { AppInterface } from './types/propTypes'

import Spinner from './components/shared/spinner/spinner'

ReactGA.initialize('UA-153619692-2')
const browserHistory = createBrowserHistory()
browserHistory.listen((location, _action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App: FC<AppInterface> = ({ theme, user }) => {
  const { spotifyToken, googleToken } = user
  const dispatch = useDispatch()
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
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

  useEffect(() => {
    if (spotifyToken) {
      //checkSpotifyToken(spotifyToken, dispatch)
    }
  }, [spotifyToken, dispatch])

  useEffect(() => {
    if (googleToken) {
      // checkGoogleToken(googleToken, dispatch)
      // Check if token from google is active.
    }
  })

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
  theme: state.theme.state,
  user: state.auth.user
})

export default connect(mapStateToProps)(App)
