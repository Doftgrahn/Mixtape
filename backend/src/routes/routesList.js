const express = require('express')
const router = express.Router()

const getList = require('../list/controller/getList.controlller')
const addListController = require('../list/controller/addList.controller')
const mutateList = require('../list/controller/mutateList.controller')
const deleteListController = require('../list/controller/deleteList.controller')

router.get('/getlist/:id', getList)
router.post('/addlist', addListController)
router.put('/mutatelist', mutateList)
router.delete('/deletelist/:id', deleteListController)

module.exports = router
