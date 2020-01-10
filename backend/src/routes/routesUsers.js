const express = require('express')
const router = express.Router()

const getUsers = require('../authentication/controller/getUsers')
const register = require('../authentication/controller/register.controller')
const login = require('../authentication/controller/login.controller')
const {
  sendPasswordReset,
  recieveNewPassword
} = require('../authentication/controller/email.controller')

router.post('/register', register)
router.post('/login', login)
router.post('/reset_password', sendPasswordReset)
router.post('/update_password', recieveNewPassword)
router.get('/getusers', getUsers)

module.exports = router
