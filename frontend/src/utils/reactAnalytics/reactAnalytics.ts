import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
const browserHistory = createBrowserHistory()

export default () => {
  ReactGA.initialize('UA-153619692-2')
  browserHistory.listen((location, _action) =>
    ReactGA.pageview(location.pathname + location.search)
  )
  ReactGA.pageview(window.location.pathname + window.location.search)
}
