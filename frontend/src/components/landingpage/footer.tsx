import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <footer className="landingpage_footer">
      <Link to="/about">Check out more about the person who made this application.</Link>
    </footer>
  )
}

export default Footer
