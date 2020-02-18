const Setlist = require('../setlistModel/setlist')

module.exports = async function leaveSetlist(req, res) {
  const { userId, boardId } = req.params
  const query = { _id: boardId }
  const setting = { $pull: { collaborators: userId } }
  await Setlist.findOneAndUpdate(query, setting)
  res.json('tjena')
}
