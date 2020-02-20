import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

const About: FC = () => {
  const history = useHistory()

  return (
    <main className="landingpage_about">
      <h2>This app was made as thesis-work.</h2>
      <a href="https://www.linkedin.com/in/simon-grahn-06994797">Check out my LinkedIn</a>
      <a href="https://github.com/Doftgrahn">Github</a>

      <button onClick={() => history.goBack()}>Go Back</button>
    </main>
  )
}

export default About
