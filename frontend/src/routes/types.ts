import { FC } from 'react'

export interface PublicRoutesInterface {
  name: string
  path: string
  component: FC
  isExact: boolean
}
