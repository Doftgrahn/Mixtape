const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  googleId: {
    type: String
  },
  name: {
    type: String,
    reqiured: true
  },
  avatar: {
    type: Object
  },
  email: {
    type: Array,
    reqiured: false
  },
  token: {
    type: String
  },
  password: {
    type: String,
    reqiured: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model('users', UserSchema)

module.exports = User
