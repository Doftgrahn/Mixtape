require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
var cookieSession = require('cookie-session')

const ConnectionToMongodb = require('./mongodb/db')

const users = require('./routes/routesUsers')
const setlist = require('./routes/routesSetlist')
const playlist = require('./routes/routesPlaylist')
const lyrics = require('./routes/routeslyrics')
//MiddleWare
app.use(express.static(`${__dirname}/../../frontend/build/`))
app.use(favicon(path.join(__dirname, '/../../frontend/build/favicon.ico')))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cookieSession({
    maxAge: 24 * 60 * 1000,
    keys: ['hejejejeejeje']
  })
)
app.use(passport.initialize())
app.use(passport.session())
//require('./authentication/strategies/passport')(passport)

// Connects do Mongodb
ConnectionToMongodb(mongoose)

//Routes
app.get('/api', (req, res) => {
  res.json({ hehe: req.user })
})

app.use('/api/users', users)
app.use('/api/setlist', setlist)
app.use('/api/playlist', playlist)
app.use('/api/lyrics', lyrics)

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../frontend/build/')
  })
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))
