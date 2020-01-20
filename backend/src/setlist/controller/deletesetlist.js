const Setlist = require('../setlistModel/setlist')
const Playlist = require('../../playlist/playlistModel/listModel')

module.exports = function deleteSetlist(req, res) {
  const { id } = req.params
  Setlist.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({ success: 'Deletion Succeded', result })
      Playlist.deleteMany({ boardId: id })
        .then(result => {
          console.log('deleted all list items connected to Setlist.')
        })
        .catch(error => console.error('Could not delete', error))
    })
    .catch(error => console.error('Chould not delete ', error))
}
