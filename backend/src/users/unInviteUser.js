const Setlist = require('../setlist/setlistModel/setlist')
module.exports = async function unInviteUser(req, res) {
  const { colabId } = req.params

  const query = { collaborators: colabId }
  const setting = { $pull: { collaborators: colabId } }
  const uninvite = await Setlist.findOneAndUpdate(query, setting)
  res.status(200).json(uninvite)
}
