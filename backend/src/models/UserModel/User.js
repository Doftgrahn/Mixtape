const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    reqiured: true
  },
  email: {
    type: String,
    reqiured: true
  },
  password: {
    type: String,
    reqiured: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  loginCount: {
    default: 0,
    type: Number
  },
  new: {
    type: Boolean,
    default: true
  }
})

const User = mongoose.model('users', UserSchema)

module.exports = User
