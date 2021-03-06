const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaylistSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  boardId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Ny LÅT'
  },
  lyrics: {
    type: String
  },
  spotifyTrackID: {
    type: String,
    default: ''
  },
  uri: {
    Type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Playlist = mongoose.model('playlist', PlaylistSchema)

module.exports = Playlist
