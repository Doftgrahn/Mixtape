import { FC, ComponentType } from 'react'
import { RouteProps, RouteComponentProps } from 'react-router-dom'
import { AuthState } from '../logic/types'

export interface RoutesInterface {
  name: string
  path: string
  component: FC
  isExact: boolean
}

export interface PrivateRouteProps extends RouteProps {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
  auth: AuthState
}
