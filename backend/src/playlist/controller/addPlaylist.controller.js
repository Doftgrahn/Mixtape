const Setlist = require('../../setlist/setlistModel/setlist')
const Playlist = require('../playlistModel/listModel')

module.exports = async function addPlaylistController(req, res) {
  const { boardId, userId, title, _id, date, lyrics, uri, spotifyTrackID } = req.body
  const setlist = await Setlist.findOne({ _id: boardId })
  if (!setlist) return res.json({ error: 'Could not find your board!' })

  const newPlaylist = new Playlist({
    _id: _id,
    boardId: boardId,
    userId: userId,
    title: title,
    date: date,
    lyrics: lyrics,
    uri: uri,
    spotifyTrackID: spotifyTrackID
  })
  const playlist = await newPlaylist.save()
  res.json(playlist)
}
