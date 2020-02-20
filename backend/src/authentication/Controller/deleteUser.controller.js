const User = require('../UserModel/User')
const Setlist = require('../../setlist/setlistModel/setlist')
const Playlist = require('../../playlist/playlistModel/listModel')
module.exports = async function deleteUser(req, res) {
  const { userId } = req.params
  await Playlist.deleteMany({ userId: userId })
  await Playlist.deleteMany({ collaborators: userId }, { $pull: { collaborators: userId } })
  await Setlist.deleteMany({ userId: userId })
  await User.deleteOne({ _id: userId })
  res.json('ok')
}
