const Playlist = require('../playlistModel/listModel')

module.exports = function movePlaylist(req, res) {
  const { firstItem, secondItem } = req.body
  const second = {
    title: secondItem.title,
    date: secondItem.date,
    lyrics: secondItem.lyrics
  }

  const first = {
    title: firstItem.title,
    date: firstItem.date,
    lyrics: firstItem.lyrics
  }

  Playlist.findOneAndUpdate({ _id: firstItem._id }, second)
    .then(result => {})
    .catch(error => {
      console.error('could not update first', error)
    })

  Playlist.findOneAndUpdate({ _id: secondItem._id }, first)
    .then(result => {})
    .catch(error => {
      console.error('could not update second')
    })
  res.json('worked')
}
