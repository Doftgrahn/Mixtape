const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../UserModel/User')
const keys = require('../../config/config')

const validateLogin = require('../validation/login')

module.exports = function logIn(req, res) {
  // Form validation
  const { errors, isValid } = validateLogin(req.body)
  // Check validation
  if (!isValid) return res.status(400).json(errors)
  const { email, password } = req.body
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) return res.status(404).json({ email: 'Email not found' })

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        }
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            })
          }
        )
      } else {
        return res.status(400).json({ password: 'Password incorrect' })
      }
    })
  })
}
