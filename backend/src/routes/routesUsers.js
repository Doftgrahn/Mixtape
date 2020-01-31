const express = require('express')
const router = express.Router()

const getUsers = require('../users/users.controller')
const deleteUser = require('../users/deleteUser')

const authCheck = require('./authCheck')

router.get('/getAllUsers', authCheck, getUsers)
router.delete('/deleteUser', deleteUser)

module.exports = router
