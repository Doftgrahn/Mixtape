const User = require('../authentication/UserModel/User')
const Setlist = require('../setlist/setlistModel/setlist')
module.exports = async function getInvitedUsers(req, res) {
  const { setListId } = req.params

  const { collaborators } = await Setlist.findById(setListId)

  const users = await User.find({ _id: collaborators })
  res.status(200).json(users)
}
