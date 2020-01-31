const Setlist = require('../../setlist/setlistModel/setlist')
const Playlist = require('../playlistModel/listModel')

module.exports = async function addPlaylistController(req, res) {
  const { activeBoard, id, title } = req.body
  const setlist = await Setlist.findOne({ _id: activeBoard })
  if (!setlist) return res.json({ error: 'Could not find your board!' })

  const newPlaylist = new Playlist({
    boardId: activeBoard,
    userId: id,
    title: title
  })
  const playlist = await newPlaylist.save()
  res.json(playlist)
}
