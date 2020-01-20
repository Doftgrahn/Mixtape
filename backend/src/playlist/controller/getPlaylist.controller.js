const Playlist = require('../playlistModel/listModel')

module.exports = function getPlaylist(req, res) {
  const { id } = req.params
  Playlist.find({ boardId: id }).then(list => {
    res.status(200).send(list)
  })
}
