import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//import Login from '../authentication/login'
import GoogleButton from '../shared/googleButton/googleButton'
import Logo from '../../assets/logo/Logo'

const Landingpage: FC<any> = ({ auth }) => {
  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <main className="landingpage">
      <div className="landing_wrapper">
        <div className="landing_container">
          <Logo height={120} width={220} />

          <h1>Mixtape</h1>
          <GoogleButton />
        </div>

        {/* <Login />*/}
      </div>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(Landingpage)
