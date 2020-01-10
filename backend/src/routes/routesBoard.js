const express = require('express')
const router = express.Router()

const getAllBoards = require('../board/controller/getBoards')
const createBoard = require('../board/controller/createBoard')
const deleteBoard = require('../board/controller/deleteBoard')
const mutateBoard = require('../board/controller/mutateBoard')

router.get('/getboards/:id', getAllBoards)
router.post('/newboard', createBoard)
router.put('/mutateboard', mutateBoard)
router.delete('/deleteboard', deleteBoard)

module.exports = router
