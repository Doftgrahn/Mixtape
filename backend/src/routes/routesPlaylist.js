const express = require('express')
const router = express.Router()

const getPlaylist = require('../playlist/controller/getPlaylist.controller')
const addPlaylistController = require('../playlist/controller/addPlaylist.controller')
const mutatePlaylist = require('../playlist/controller/mutateList.controller')
const deletePlaylist = require('../playlist/controller/deletePlaylist.controller')
const movePlaylist = require('../playlist/controller/moveplaylist.controller')

router.get('/getplaylist/:id', getPlaylist)
router.post('/addplaylist', addPlaylistController)
router.put('/mutateplaylist', mutatePlaylist)
router.delete('/deleteplaylist/:id', deletePlaylist)
router.post('/moveplaylist', movePlaylist)

module.exports = router
