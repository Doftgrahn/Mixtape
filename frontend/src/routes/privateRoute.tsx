import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { ProtectedRouteProps } from '../types'

const PrivateRoute: FC<ProtectedRouteProps> = ({ component: Component, auth, ...rest }): any => {
  return (
    <Route
      {...rest}
      render={props => (auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
}

const mapStateToProps = (state: any): any => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
