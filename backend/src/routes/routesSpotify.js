const express = require('express')
const router = express.Router()
const authCheck = require('./authCheck')

const searchSpotify = require('../spotify/spotify.controller')

router.get('/search/:searchString', authCheck, searchSpotify)

module.exports = router
