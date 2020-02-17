const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SetlistSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now()
  },
  collaborators: {
    type: Array,
    default: [String]
  }
})

const Setlist = mongoose.model('setlists', SetlistSchema)

module.exports = Setlist
