const Board = require('../../board/boardModel/board')
const List = require('../listModel/listModel')

module.exports = function listController(req, res) {
  const { boardId } = req.body

  const newListItem = new List({
    boardId: boardId
  })
  newListItem
    .save()
    .then(list => res.json(list))
    .catch(error => res.status(500).json({ error: 'Could create list.' }))
}
