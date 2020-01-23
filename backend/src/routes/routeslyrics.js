const express = require('express')
const router = express.Router()

const getTracks = require('../lyrics/getTracks.controller')
const setLyric = require('../lyrics/setLyric.controller')

const authCheck = require('./authCheck')

router.get('/getTracks/:songTitle', authCheck, getTracks)
router.post('/setLyric', authCheck, setLyric)

module.exports = router
