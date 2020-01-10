const Board = require('../boardModel/board')

module.exports = function mutateBoard(req, res) {
  const { id, title } = req.params
  Board.findOneAndUpdate({ _id: id }, title, { upsert: true })
    .then(board => {
      if (!board) return res.status(404).json({ error: 'board could not be found' })
      res.status(200).json(board)
    })
    .catch(error => res.status(500).json({ error: 'Could not get boards', error }))
}
