const axios = require('axios')

module.exports = async function searchSpotify(req, res) {
  const { type, searchString } = req.body
  const url = `https://api.spotify.com/v1/search?q=${searchString}&type=track`

  const client_token = req.user.spotifyToken
  const config = {
    headers: {
      Authorization: `Bearer ${client_token}`
    }
  }

  axios
    .get(url, config)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error('Unaotherized')
    })
}

//"https://api.spotify.com/v1/search?q=Valborg&type=track"
