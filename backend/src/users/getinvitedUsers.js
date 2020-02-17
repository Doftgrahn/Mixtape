const User = require('../authentication/UserModel/User')
const Setlist = require('../setlist/setlistModel/setlist')
module.exports = async function getInvitedUsers(req, res) {
  const { setListId } = req.params

  const data = await Setlist.findOne({ _id: setListId })
  const collaborators = data.collaborators
  const users = await User.find({ _id: collaborators })
  res.status(200).json(users)
}
