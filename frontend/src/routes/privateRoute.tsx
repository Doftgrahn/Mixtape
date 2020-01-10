import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { PrivateRouteProps } from './types'

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        auth != null && auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

const mapStateToProps = (state: any): any => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
