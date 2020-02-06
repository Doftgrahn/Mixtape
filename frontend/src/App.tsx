import React, { FC, useEffect, Suspense } from 'react'
import './styles/App.scss'
import { connect, useDispatch } from 'react-redux'
import ReactGA from 'react-ga'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { lightTheme, darkTheme } from './utils/colors/colors'
import { getActiveUser } from './logic/auth/authAction'

import { AppInterface } from './types/propTypes'

import Routes from './routes/routes'
import Spinner from './components/shared/spinner/spinner'
import ScrollToTop from './utils/scrollToTop/scrollToTop'

const browserHistory = createBrowserHistory()

ReactGA.initialize('UA-153619692-2')
browserHistory.listen((location, _action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App: FC<AppInterface> = ({ theme, user }) => {
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

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
