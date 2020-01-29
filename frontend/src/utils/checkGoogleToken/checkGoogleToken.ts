import Axios from 'axios'
import { logoutUser } from '../../logic/auth/authAction'

let url = 'https://www.mixtape.nu/api/users/logout'
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:4000/api/users/logout'
}

export default (googleToken: string, dispatch: any) => {
  const profileUrl = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleToken}`

  Axios.get(profileUrl)
    .then(profile => {
      return
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(logoutUser())
        console.log(logoutUser())
        window.location.href = url
      }
    })
}
