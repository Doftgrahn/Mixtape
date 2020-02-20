import React, { FC } from 'react'

import Hero from './landingpage/hero'
import Info from './landingpage/info'
import About from './landingpage/about'
import Footer from './landingpage/footer'

const Landingpage: FC<{}> = () => {
  return (
    <main className="landingpagewrapper">
      <Hero />
      <Info />
      <About />
      <Footer />
    </main>
  )
}

export default Landingpage
