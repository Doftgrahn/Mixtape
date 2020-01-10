const Board = require('../../board/boardModel/board')
const List = require('../listModel/listModel')

module.exports = function addListController(req, res) {
  const { boardId } = req.body

  console.log('hej')

  Board.findOne({ _id: boardId }).then(board => {
    if (!board) return res.json({ error: 'Could not find a board with that id' })

    const newListItem = new List({
      boardId: boardId
    })
    newListItem
      .save()
      .then(list => res.json(list))
      .catch(error => res.status(500).json({ error: 'Could create list.', error }))
  })
}
