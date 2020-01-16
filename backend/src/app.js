require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')

const ConnectionToMongodb = require('./mongodb/db')

const users = require('./routes/routesUsers')
const board = require('./routes/routesBoard')
const list = require('./routes/routesList')
//MiddleWare
app.use(express.static(`${__dirname}/../../frontend/build/`))
app.use(favicon(path.join(__dirname, '/../../frontend/build/favicon.ico')))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
require('./authentication/strategies/passport')(passport)

// Connects do Mongodb
ConnectionToMongodb(mongoose)

//Routes
app.get('/api', (req, res) => {
  res.json('hehe')
})

app.use('/api/users', users)
app.use('/api/board', board)
app.use('/api/list', list)

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../frontend/build/')
  })
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))
