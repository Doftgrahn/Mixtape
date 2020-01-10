const express = require('express')
const router = express.Router()

const getList = require('../list/controller/getList.controlller')
const addListController = require('../list/controller/addList.controller')
const deleteListController = require('../list/controller/deleteList.controller')

router.get('/getlist/:id', getList)
router.post('/addlist', addListController)
router.delete('deletelist/:id', deleteListController)

module.exports = router
