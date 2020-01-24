const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SetlistSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
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
  isOwner: {
    type: Boolean,
    default: true
  }
})

const Setlist = mongoose.model('setlists', SetlistSchema)

module.exports = Setlist
