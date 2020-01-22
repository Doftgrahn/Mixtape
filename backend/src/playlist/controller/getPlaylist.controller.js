const Playlist = require('../playlistModel/listModel')

module.exports = function getPlaylist(req, res) {
  const { id } = req.params
  Playlist.find({ boardId: id })
    .then(list => {
      res.status(200).json(list)
    })
    .catch(_error => {
      res.status(404).json({ error: 'Could not get playlist' })
    })
}
