const axios = require('axios')

module.exports = async function searchSpotify(req, res) {
  const url = 'https://accounts.spotify.com/api/token'

  confirm = {
    Authorization: 
    grant_type: 'refresh_token'
  }

  axios
    .post(url, config)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error('Unaotherized')
    })
}
