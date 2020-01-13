const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListSchema = new Schema({
  boardId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  song: {
    type: String,
    default: 'Ny LÅT'
  },
  artist: {
    type: String,
    default: 'Artist'
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const List = mongoose.model('list', ListSchema)

module.exports = List
