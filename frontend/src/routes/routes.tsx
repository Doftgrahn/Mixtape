import React, { FC, lazy } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { RoutesInterface } from './routeTypes'
// Higher order Route for authentication
import PrivateRoute from './privateRoute'

// Lazy Loading Components
const Landingpage = lazy(() => import('../components/LandingPage'))
const Register = lazy(() => import('../components/authentication/Register'))
const ForgotPassword = lazy(() => import('../components/authentication/ForgotPassword'))
const UpdatePassword = lazy(() => import('../components/authentication/UpdatePassword'))
const NotFound = lazy(() => import('../components/shared/notFound/NotFound'))
const Setlist = lazy(() => import('../components/Setlist'))
const Playlist = lazy(() => import('../components/Playlist'))

const publicRoutes: RoutesInterface[] = [
  { name: 'home', path: '/', component: Landingpage, isExact: true },
  { name: 'register', path: '/register', component: Register, isExact: false },
  { name: 'forgotPassword', path: '/forgotPassword', component: ForgotPassword, isExact: false },
  { name: 'updatePassword', path: '/updatePassword', component: UpdatePassword, isExact: false },
  { name: '404', path: '*', component: NotFound, isExact: false }
]

const privateRoutes: any = [
  { name: 'mixtape', path: '/dashboard', component: Setlist, isExact: true },
  { name: 'list', path: '/dashboard/:title', component: Playlist, isExact: true }
]

const Routes: FC<{}> = () => {
  const location: any = useLocation()

  const PrivateRoutes = privateRoutes.map((route: any) => (
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
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={{ enter: 400, exit: 400 }}>
        <Switch location={location}>
          {PrivateRoutes}
          {PublicRoutes}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Routes
