const express = require('express')
const router = express.Router()

const getAllBoards = require('../board/controller/getBoards')
const createBoard = require('../board/controller/createBoard')

router.get('/getboards/:id', getAllBoards)
router.post('/newboard', createBoard)

module.exports = router
