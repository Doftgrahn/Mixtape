const User = require('../authentication/UserModel/User')
module.exports = function getUsers(req, res) {
  User.find({}).then(users => {
    if (!users) return res.status(404).json({ error: 'Could not find any users' })
    res.status(200).json(users)
  })
}
