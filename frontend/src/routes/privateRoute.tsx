import React, { FC, ReactNode } from 'react'

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute: FC = ({ component: Component, auth: any, ...rest }): any => {
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
