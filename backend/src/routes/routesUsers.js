const express = require('express')
const router = express.Router()

const register = require('../authentication/Controller/register.controller')
const login = require('../authentication/Controller/login.controller')
const {
  sendPasswordReset,
  recieveNewPassword
} = require('../authentication/Controller/email.controller')

router.post('/register', register)
router.post('/login', login)
router.post('/reset_password', sendPasswordReset)
router.post('/update_password', recieveNewPassword)

module.exports = router
