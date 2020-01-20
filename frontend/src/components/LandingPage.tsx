import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import GoogleButton from './shared/googleButton/googleButton'
import Logo from './../assets/logo/Logo'

import { LandingInterface } from '../types'

const Landingpage: FC<LandingInterface> = ({ auth }) => {
  if (auth) {
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
      </div>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landingpage)
