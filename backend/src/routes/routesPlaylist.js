const express = require('express')
const router = express.Router()

const getPlaylist = require('../playlist/controller/getPlaylist.controller')
const addPlaylistController = require('../playlist/controller/addPlaylist.controller')
const mutatePlaylist = require('../playlist/controller/mutateList.controller')
const deletePlaylist = require('../playlist/controller/deletePlaylist.controller')
const movePlaylist = require('../playlist/controller/moveplaylist.controller')

const addSpotifyTrack = require('../playlist/controller/addSpotifyTrack')

const authCheck = require('./authCheck')

router.get('/getplaylist/:id', authCheck, getPlaylist)
router.post('/addplaylist', authCheck, addPlaylistController)
router.put('/mutateplaylist', authCheck, mutatePlaylist)
router.delete('/deleteplaylist/:id', authCheck, deletePlaylist)

router.post('/addSpotifyTrack', authCheck, addSpotifyTrack)

router.post('/moveplaylist', authCheck, movePlaylist)

module.exports = router
