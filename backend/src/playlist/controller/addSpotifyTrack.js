const Playlist = require('../playlistModel/listModel')

module.exports = async function addSpotifyTrack(req, res) {
  const { spotifyTrackID, id } = req.body
  const setTrack = await Playlist.findOneAndUpdate(
    { _id: id },
    { spotifyTrackID: spotifyTrackID },
    { upsert: true }
  )
  res.json(setTrack)
}
