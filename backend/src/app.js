require('dotenv').config()
import express from 'express'
import path from 'path'
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieSession = require('cookie-session')

//Strategies
require('./authentication/strategies/spotify')
require('./authentication/strategies/google')

const ConnectionToMongodb = require('./mongodb/db')

const auth = require('./routes/routesAuth')
const users = require('./routes/routesUsers')
const setlist = require('./routes/routesSetlist')
const playlist = require('./routes/routesPlaylist')
const lyrics = require('./routes/routeslyrics')
const spotify = require('./routes/routesSpotify')

//MiddleWare
const app = express()
app.use(express.static(`${__dirname}/../../frontend/build/`))
app.use(favicon(path.join(__dirname, '/../../frontend/build/favicon.ico')))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: ['hejejejeejeje', 'ke2']
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Connects do Mongodb
ConnectionToMongodb(mongoose)

//Routes
app.get('/api', (_req, res) => res.json('Välkommen!'))
app.use('/api/users', auth)
app.use('/api/allUsers', users)
app.use('/api/setlist', setlist)
app.use('/api/playlist', playlist)
app.use('/api/lyrics', lyrics)
app.use('/api/spotify', spotify)

app.get('/service-worker.js', (_req, res) => {
  res.sendFile('service-worker.js', {
    root: path.join(__dirname, '../../frontend/build/')
  })
})

app.get('*', function(_req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../frontend/build/')
  })
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))
