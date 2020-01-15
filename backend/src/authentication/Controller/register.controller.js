const validateRegister = require('../validation/register')
const bcrypt = require('bcryptjs')
const User = require('../UserModel/User')

module.exports = function register(req, res) {
  const { errors, isValid } = validateRegister(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' })
    } else {
      const { name, email, password } = req.body
      const newUser = new User({
        name: name,
        email: email,
        password: password
      })

      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
}
