import React, { FC } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { PublicRoutesInterface } from './types'
import PrivateRoute from './privateRoute'

import Landingpage from '../components/LandingPage'
import MixTape from '../components/MixTape'
import Register from '../components/authentication/Register'
import ForgotPassword from '../components/authentication/ForgotPassword'
import UpdatePassword from '../components/authentication/UpdatePassword'

const publicRoutes: PublicRoutesInterface[] = [
  { name: 'home', path: '/', component: Landingpage, isExact: true },
  { name: 'mixtape', path: '/mixtape', component: MixTape, isExact: true },
  { name: 'register', path: '/register', component: Register, isExact: false },
  { name: 'forgotPassword', path: '/forgotPassword', component: ForgotPassword, isExact: false },
  { name: 'updatePassword', path: '/updatePassword', component: UpdatePassword, isExact: false }
]

const Routes: FC = () => {
  const location = useLocation()

  const PublicRoutes = publicRoutes.map((c, i) => (
    <Route key={i} path={c.path} component={c.component} exact={c.isExact} />
  ))

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={200}>
        <Switch location={location}>{PublicRoutes}</Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Routes
