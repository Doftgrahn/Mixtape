const express = require('express')
const router = express.Router()

const getAllSetlists = require('../setlist/controller/getSetlists')
const createSetlist = require('../setlist/controller/createSetlist')
const mutateSetlist = require('../setlist/controller/mutateSetlist')
const deleteSetlist = require('../setlist/controller/deletesetlist')

router.get('/getsetlists/:id', getAllSetlists)
router.post('/newsetlist', createSetlist)
router.put('/mutatesetlist', mutateSetlist)
router.delete('/deletesetlist/:id', deleteSetlist)

module.exports = router
