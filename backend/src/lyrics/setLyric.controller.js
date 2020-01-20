const genius = require('genius-lyrics')
const Genius = new genius.Client(process.env.genius_token)

const Playlist = require('../playlist/playlistModel/listModel')

module.exports = async function setLyric(req, res) {
  const { url, _id } = req.body

  const { lyrics } = await Genius.getLyrics(url)

  Playlist.findOneAndUpdate({ _id }, { lyrics })
    .then(result => {
      res.status(200).json(result)
      console.log('RESULT', result)
    })
    .catch(error => {
      res.json({ error: error })
    })
}
