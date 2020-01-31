const User = require('../authentication/UserModel/User')
module.exports = async function getUsers(req, res) {
  const currentUser = req.user._id._id.toString()
  const users = await User.find({})
  const filtered = users.filter(u => u.id !== currentUser)
  res.status(200).json(filtered)
}
