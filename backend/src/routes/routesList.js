const express = require('express')
const router = express.Router()

const getList = require('../list/controller/getList.controlller')
const addListController = require('../list/controller/addList.controller')

router.get('/getlist/:id', getList)
router.get('/addlist', addListController)

module.exports = router
