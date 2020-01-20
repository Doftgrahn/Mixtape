const Playlist = require('../playlistModel/listModel')
module.exports = function deletePlaylist(req, res) {
  const { id } = req.params
  Playlist.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({ success: 'deletion sucess', result })
    })
    .catch(error => res.status(404).json({ error: error }))
}
