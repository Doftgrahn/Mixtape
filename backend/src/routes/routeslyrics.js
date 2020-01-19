const express = require('express')
const router = express.Router()

const getTracks = require('../lyrics/getTracks.controller')
const setLyric = require('../lyrics/setLyric.controller')

router.get('/getTracks/:songTitle', getTracks)
router.post('/setLyric', setLyric)

module.exports = router
