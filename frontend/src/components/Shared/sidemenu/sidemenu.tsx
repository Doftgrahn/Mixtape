import React, { FC, useEffect, ReactNode } from 'react'
import Div100vh from 'react-div-100vh'
import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'

interface SideMenuInterface {
  children: ReactNode
  sidemenu: boolean
}

const Sidemenu: FC<SideMenuInterface> = ({ children, sidemenu }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  useEffect(() => {
    if (!sidemenu) {
      setIsComponentVisible(true)
    }
  })

  return (
    <section
      ref={ref}
      className={`userProfile sidebar ${sidemenu && isComponentVisible && 'active'}`}>
      <Div100vh>{children}</Div100vh>
    </section>
  )
}

export default Sidemenu
