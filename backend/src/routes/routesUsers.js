const express = require('express')
const router = express.Router()

const getUsers = require('../users/users.controller')

const authCheck = require('./authCheck')

router.get('/getAllUsers', authCheck, getUsers)

module.exports = router
