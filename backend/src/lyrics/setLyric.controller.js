const genius = require('genius-lyrics')
const Genius = new genius.Client(process.env.genius_token)

const Playlist = require('../playlist/playlistModel/listModel')

module.exports = async function setLyric(req, res) {
  const { url, _id } = req.body

  const { lyrics } = await Genius.getLyrics(url)

  Playlist.findOneAndUpdate({ _id }, { lyrics }, { new: true })
    .then(_result => {
      res.status(200).json({ lyrics })
      console.log('Success sett lyric')
    })
    .catch(_error => {
      res.json({ error: 'Could not save your lyric, pleace try again.' })
    })
}
