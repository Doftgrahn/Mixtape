import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import GoogleButton from '../shared/googleButton/googleButton'
import Logo from '../../assets/logo/Logo'

import { LandingInterface } from '../../types/propTypes'

const Hero: FC<LandingInterface> = ({ auth }) => {
  if (auth) {
    return <Redirect to="/dashboard" />
  }
  return (
    <section className="landingpage">
      <div className="landing_wrapper">
        <div className="landing_container">
          <Logo height={120} width={220} />
          <h1 aria-label="Mixtape">Mixtape</h1>
          <h3>BETA</h3>
          <GoogleButton />
          <Link className="permissions" to="/policy">
            By logging in you accept Mixtapes terms and permissions
          </Link>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Hero)
