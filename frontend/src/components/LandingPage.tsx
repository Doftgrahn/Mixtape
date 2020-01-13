import React, { FC } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './authentication/login'

const Landingpage: FC<any> = ({ auth }) => {
  if (auth.isAuthenticated) {
    return <Redirect to="/home" />
  }
  return (
    <main>
      <h1>Välkommen till Göran, men också känt som MixTape</h1>
      Landingpage
      <Link to="/home">To mixtape</Link>
      <Login />
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(Landingpage)
