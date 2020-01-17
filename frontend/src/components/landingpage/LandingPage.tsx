import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//import Login from '../authentication/login'
import GoogleButton from '../shared/googleButton/googleButton'

const Landingpage: FC<any> = ({ auth }) => {
  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <main className="landingpage">
      <section>
        <GoogleButton />

        {/* <Login />*/}
      </section>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(Landingpage)
