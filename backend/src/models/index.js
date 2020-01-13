const User = require('./UserModel/User')
const Board = require('./boardModel/board')
const List = require('./listModel/listModel')

const Model = {
  user: User,
  board: Board,
  list: List
}

module.exports = Model
