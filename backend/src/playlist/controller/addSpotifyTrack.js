const Playlist = require('../playlistModel/listModel')

module.exports = async function addSpotifyTrack(req, res) {
  const { spotifyTrackID, id, uri } = req.body
  const setTrack = await Playlist.findOneAndUpdate(
    { _id: id },
    { spotifyTrackID: spotifyTrackID, uri: uri },
    { upsert: true }
  )
  res.json(setTrack)
}
