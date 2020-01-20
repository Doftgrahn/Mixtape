const Setlist = require('../../setlist/setlistModel/setlist')
const Playlist = require('../playlistModel/listModel')

module.exports = function addPlaylistController(req, res) {
  const { activeBoard, id, title } = req.body
  Setlist.findOne({ _id: activeBoard }).then(setlist => {
    if (!setlist) return res.json({ error: 'Could not find a board with that id' })

    const newPlaylist = new Playlist({
      boardId: activeBoard,
      userId: id,
      title: title
    })
    newPlaylist
      .save()
      .then(list => res.json(list))
      .catch(error => res.status(500).json({ error: 'Could create list.', error }))
  })
}
