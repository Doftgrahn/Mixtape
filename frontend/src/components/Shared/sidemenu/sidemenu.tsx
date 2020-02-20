import React, { FC, useEffect, ReactNode } from 'react'
import Div100vh from 'react-div-100vh'
import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'
import { CSSTransition } from 'react-transition-group'

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

  const duration = 300
  return (
    <CSSTransition in={sidemenu} timeout={duration} classNames="alert" unmountOnExit={true}>
      <section
        ref={ref}
        className={`userProfile sidebar ${sidemenu && isComponentVisible && 'active'}`}>
        <Div100vh>{children}</Div100vh>
      </section>
    </CSSTransition>
  )
}

export default Sidemenu
