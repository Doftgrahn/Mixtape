const Board = require('../boardModel/board')

module.exports = function getAllBoards(req, res) {
  const { id } = req.params
  Board.find({ userId: id })
    .then(board => {
      res.status(200).json(board)
    })
    .catch(error => res.status(500).json({ error: 'Could not get boards' }))
}
