import Axios from 'axios'
import { logoutUser } from '../../logic/auth/authAction'

let url = 'https://www.mixtape.nu/api/users/logout'
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:4000/api/users/logout'
}

const checkSpotifyToken = (spotifyToken: string, dispatch: any) => {
  const profileUrl = 'https://api.spotify.com/v1/me'
  const config = {
    headers: {
      Authorization: `Bearer ${spotifyToken}`
    }
  }
  Axios.get(profileUrl, config)
    .then(_profile => {
      return
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(logoutUser())
        window.location.href = url
      }
    })
}

export default checkSpotifyToken
