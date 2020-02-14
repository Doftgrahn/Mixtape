import React, { FC } from 'react'

import Hero from './landingpage/hero'
import Info from './landingpage/info'
import About from './landingpage/about'

const Landingpage: FC<{}> = () => {
  return (
    <>
      <Hero />
      <Info />
      <About />
    </>
  )
}

export default Landingpage
