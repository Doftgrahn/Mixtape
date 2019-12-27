require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()
app.use(express.static(`${__dirname}/../../frontend/build/`))
app.use(favicon(path.join(__dirname, '/../../frontend/build/favicon.ico')))

app.use(express.json())

app.get('/api', (req, res) => {
  res.json('hehe')
})

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../frontend/build/')
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on port ${port}`))

console.log('hej vad händer?')
