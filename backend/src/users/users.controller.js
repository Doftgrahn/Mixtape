const User = require('../authentication/UserModel/User')
module.exports = function getUsers(req, res) {
  const currentUser = req.user._id._id.toString()

  User.find({}).then(users => {
    if (!users) return res.status(404).json({ error: 'Could not find any users' })
    const newUsers = users.slice()
    const filtered = newUsers.filter(u => u.id !== currentUser)
    res.status(200).json(filtered)
  })
}
