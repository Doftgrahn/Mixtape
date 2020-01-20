import React, { FC } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { RoutesInterface } from './types'

import PrivateRoute from './privateRoute'

import Landingpage from '../components/LandingPage'
import Register from '../components/authentication/Register'
import ForgotPassword from '../components/authentication/ForgotPassword'
import UpdatePassword from '../components/authentication/UpdatePassword'
import NotFound from '../components/shared/NotFound'
import Setlist from '../components/Setlist'
import Playlist from '../components/Playlist'

const publicRoutes: RoutesInterface[] = [
  { name: 'home', path: '/', component: Landingpage, isExact: true },
  { name: 'register', path: '/register', component: Register, isExact: false },
  { name: 'forgotPassword', path: '/forgotPassword', component: ForgotPassword, isExact: false },
  { name: 'updatePassword', path: '/updatePassword', component: UpdatePassword, isExact: false },
  { name: '404', path: '*', component: NotFound, isExact: false }
]

const privateRoutes: RoutesInterface[] = [
  { name: 'mixtape', path: '/dashboard', component: Setlist, isExact: true },
  { name: 'list', path: '/dashboard/:title', component: Playlist, isExact: true }
]

const Routes: FC<{}> = () => {
  const location: any = useLocation()

  const PrivateRoutes = privateRoutes.map(route => (
    <PrivateRoute
      key={route.name}
      path={route.path}
      component={route.component}
      exact={route.isExact}
    />
  ))

  const PublicRoutes = publicRoutes.map(route => (
    <Route
      key={route.name}
      path={route.path}
      render={(props: any) => <route.component {...props} />}
      exact={route.isExact}
    />
  ))

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={200}>
        <Switch location={location}>
          {PrivateRoutes}
          {PublicRoutes}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Routes
