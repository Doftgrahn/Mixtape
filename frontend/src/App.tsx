import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import './styles/App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import authlocalstorage from './utils/AuthLocalStorage/authlocalstorage'
import Routes from './routes/routes'
import { AppModel } from './logic/board/boardAction'

const App: FC<any> = ({ auth }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.isAuthenticated) {
      dispatch(AppModel(id))
    }
    authlocalstorage()
  }, [auth.isAuthenticated, dispatch, id])

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
