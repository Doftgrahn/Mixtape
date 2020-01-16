const Board = require('../../board/boardModel/board')
const List = require('../listModel/listModel')

module.exports = function addListController(req, res) {
  const { activeBoard, id, title } = req.body
  Board.findOne({ _id: activeBoard }).then(board => {
    if (!board) return res.json({ error: 'Could not find a board with that id' })

    const newListItem = new List({
      boardId: activeBoard,
      userId: id,
      title: title
    })
    newListItem
      .save()
      .then(list => res.json(list))
      .catch(error => res.status(500).json({ error: 'Could create list.', error }))
  })
}
