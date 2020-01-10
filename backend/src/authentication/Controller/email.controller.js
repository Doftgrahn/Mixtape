const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/config')

const User = require('../UserModel/User')
const validateNewPassword = require('../validation/recieveNewPassword')
const { transporter, getPasswordUrl, resetPassportTemplate } = require('../email/email')

const userPassportHashToMakeMeToken = user => {
  const { id, name } = user
  const payload = {
    id: id,
    name: name
  }
  const token = jwt.sign(payload, keys.secretOrKey, {
    expiresIn: 3600 // One hour
  })
  // Todo ---- Set up as an object instead.
  return token
}

const sendPasswordReset = (req, res) => {
  const { email } = req.body

  User.findOne({ email }).then(user => {
    if (!user) return res.status(404).json({ email: 'No user with that email' })

    const token = userPassportHashToMakeMeToken(user)
    const url = getPasswordUrl(user, token)
    const emailTemplate = resetPassportTemplate(user, url)

    const sendEmail = () => {
      transporter.sendMail(emailTemplate, (err, info) => {
        if (err) {
          console.log('ERROR Sending Mail', err)
          return res.status(500).json({ error: 'Error Sending Mail', err })
        }
        res.status(200).json({ success: true })
        console.log('** Email Sent **', info)
      })
    }

    sendEmail()
  })
}

const recieveNewPassword = (req, res) => {
  const { errors, isValid } = validateNewPassword(req.body)
  if (!isValid) return res.status(400).json(errors)

  const { id, token } = req.body
  User.findOne({ _id: id })
    .then(user => {
      const secret = keys.secretOrKey
      const payload = jwt.decode(token, secret)

      if (payload.id === user.id) {
        const { password } = req.body
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err
          bcrypt.hash(password, salt, (error, hash) => {
            if (error) throw err
            User.findOneAndUpdate({ _id: id }, { password: hash })
              .then(() => res.status(202).json({ password: 'Password change accepted' }))
              .catch(() => res.status(500).json({ error: 'Could not changes password' }))
          })
        })
      }
    })
    .catch(() => {
      res.status(404).json({ error: 'Invalid User' })
    })
}

module.exports = { sendPasswordReset, recieveNewPassword }
