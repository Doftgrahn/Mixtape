const express = require('express')
const router = express.Router()
import passport from 'passport'

const jwt = require('jsonwebtoken')
const keys = require('../config/config')

const getUsers = require('../authentication/controller/getUsers')
const register = require('../authentication/controller/register.controller')
const login = require('../authentication/controller/login.controller')
const {
  sendPasswordReset,
  recieveNewPassword
} = require('../authentication/controller/email.controller')

require('../authentication/strategies/google')

router.post('/register', register)
router.post('/login', login)
router.post('/reset_password', sendPasswordReset)

router.post('/update_password', recieveNewPassword)
router.get('/getusers', getUsers)

let url = 'https://www.mixtape.nu/'
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3000/'
}

router.get(
  '/spotify',
  passport.authenticate('spotify', {
    scope: [
      'user-read-email',
      'user-read-private',
      'streaming',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-private',
      'playlist-modify-public',
      'playlist-modify-private'
    ]
  })
)

router.get('/spotify/redirect', passport.authenticate('spotify'), (_req, res) => {
  res.redirect(url)
})

// Google

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get('/google/redirect', passport.authenticate('google'), (_req, res) => {
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
