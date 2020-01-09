const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BoardSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Ny låtlista...'
  },
  date: {
    type: Date,
    default: Date.now()
  },
  collaborators: {
    type: Array,
    default: []
  },
  songList: {
    type: Array,
    default: []
  }
})

const Board = mongoose.model('board', BoardSchema)

module.exports = Board
