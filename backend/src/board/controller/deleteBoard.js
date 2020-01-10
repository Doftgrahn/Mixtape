const Board = require('../boardModel/board')

module.exports = function deleteBoard(req, res) {
  const { id } = req.body
  Board.remove({ id })
    .then(result => {
      res.status(200).json({ success: 'Deletion Succeded', result })
    })
    .catch(error => console.error('Chould not delete ', error))
}
