import jwt_decode from 'jwt-decode'

// Check for token to keep user logged in
import { logoutUser, setCurrentUser } from '../../logic/auth/authAction'

import setAuthToken from '../../logic/auth/utils/setAuthToken'

export default function authlocalstorage() {
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken
    setAuthToken(token)
    // Decode token and get user info and exp
    const decoded: any = jwt_decode(token)
    // Set user and isAuthenticated
    setCurrentUser(decoded)
    // Check for expired token
    const currentTime = Date.now() / 1000 // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      logoutUser()

      // Redirect to login
      window.location.href = './login'
    }
  }
}
