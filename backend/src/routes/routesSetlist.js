const express = require('express')
const router = express.Router()
require('../authentication/strategies/google')

const getAllSetlists = require('../setlist/controller/getSetlists')
const createSetlist = require('../setlist/controller/createSetlist')
const mutateSetlist = require('../setlist/controller/mutateSetlist')
const deleteSetlist = require('../setlist/controller/deletesetlist')
const moveSetlist = require('../setlist/controller/moveSetlist')

const addDescription = require('../setlist/controller/addDescription')

const addCollaborator = require('../setlist/controller/addCollaborator')
const leaveSetlist = require('../setlist/controller/leaveSetlist')

const authCheck = require('./authCheck')

router.get('/getsetlists/:id', authCheck, getAllSetlists)
router.post('/newsetlist', authCheck, createSetlist)
router.put('/mutatesetlist', authCheck, mutateSetlist)
router.delete('/deletesetlist/:id', authCheck, deleteSetlist)
router.put('/moveSetlist', authCheck, moveSetlist)

router.post('/adddescription', authCheck, addDescription)

router.post('/addcollaborator', authCheck, addCollaborator)
router.delete('/leaveSetlist/:userId/:boardId', authCheck, leaveSetlist)

module.exports = router
