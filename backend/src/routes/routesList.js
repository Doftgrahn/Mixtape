const express = require('express')
const router = express.Router()

const listController = require('../list/controller/list.controlller')

router.post('/newlist', listController)

module.exports = router
