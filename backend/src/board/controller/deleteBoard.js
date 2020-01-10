const Board = require('../boardModel/board')

module.exports = function deleteBoard(req, res) {
  const { id } = req.params
  Board.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({ success: 'Deletion Succeded', result })
    })
    .catch(error => console.error('Chould not delete ', error))
}
