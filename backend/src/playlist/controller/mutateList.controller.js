const Playlist = require('../playlistModel/listModel')

module.exports = function mutatePlaylist(req, res) {
  const { id, title } = req.body
  Playlist.findOneAndUpdate({ _id: id }, { title: title })
    .then(result => {
      console.log(result)

      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({ error: error })
    })
}
