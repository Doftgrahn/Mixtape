const express = require('express')
const router = express.Router()
import passport from 'passport'

const getUsers = require('../authentication/controller/getUsers')
const register = require('../authentication/controller/register.controller')
const login = require('../authentication/controller/login.controller')
const {
  sendPasswordReset,
  recieveNewPassword
} = require('../authentication/controller/email.controller')

const googleSetup = require('../authentication/strategies/google')

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/')
  } else {
    next()
  }
}

router.post('/register', register)
router.post('/login', login)
router.post('/reset_password', sendPasswordReset)

router.post('/update_password', recieveNewPassword)
router.get('/getusers', getUsers)

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

let url = 'https://www.mixtape.nu/'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3000/'
}

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.json(req.user)
  res.redirect(url)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(url)
})

router.get('/getActiveUser', (req, res) => {
  const { user } = req

  res.status(200).json(user)
})

module.exports = router
