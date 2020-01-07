require('dotenv').config()
const express = require('express')
const path = require('path')

const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const ConnectionToMongodb = require('./mongodb/db')
const users = require('./routes/routesUsers')
//MiddleWare
app.use(express.static(`${__dirname}/../../frontend/build/`))
app.use(favicon(path.join(__dirname, '/../../frontend/build/favicon.ico')))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// Connects do Mongodb
ConnectionToMongodb(mongoose)

app.get('/api', (req, res) => {
  res.json('hehe')
})
app.use('/api/users', users)

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../frontend/build/')
  })
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))
