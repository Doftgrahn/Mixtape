import { useEffect, FC } from 'react'
import { withRouter } from 'react-router-dom'

const ScrollToTop: FC<any> = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return children
}

export default withRouter(ScrollToTop)
