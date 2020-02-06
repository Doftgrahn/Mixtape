const Setlist = require('../setlistModel/setlist')

module.exports = async function leaveSetlist(req, res) {
  const { id } = req.params
  const query = { collaborators: id }
  const setting = { $pull: { collaborators: id } }
  await Setlist.findOneAndUpdate(query, setting)
}
