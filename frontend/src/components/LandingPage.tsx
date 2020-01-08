import React, { FC } from 'react'

import { Link } from 'react-router-dom'
const Landingpage: FC = () => {
  return (
    <main>
      <h1>Välkommen till Göran, men också känt som MixTape</h1>
      Landingpage
      <Link to="/mixtape">To mixtape</Link>
    </main>
  )
}

export default Landingpage
