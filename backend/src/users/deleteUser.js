const User = require('../authentication/UserModel/User')

let url = 'https://www.mixtape.nu/'
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3000/'
}

module.exports = async function deleteUser(req, res) {
  const id = req.user._id.toString()
  req.logout()
  res.redirect(url)
  await User.findByIdAndDelete(id)
}
