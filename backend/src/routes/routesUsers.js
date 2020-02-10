const express = require('express')
const router = express.Router()

const getUsers = require('../users/users.controller')
const getInvitedUsers = require('../users/getinvitedUsers')
const deleteUser = require('../users/deleteUser')
const unInviteUser = require('../users/unInviteUser')

const authCheck = require('./authCheck')

router.get('/getAllUsers', authCheck, getUsers)
router.get('/getInvitedUsers/:setListId', authCheck, getInvitedUsers)
router.delete('/deleteUser', deleteUser)
router.delete('/unInviteUser/:colabId', unInviteUser)

module.exports = router
