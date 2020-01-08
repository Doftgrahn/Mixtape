const express = require('express')
const router = express.Router()

const createBoard = require('../board/boardModel/board')

router.post('/board', createBoard)

module.exports = router
