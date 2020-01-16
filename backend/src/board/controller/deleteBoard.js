const Board = require('../boardModel/board')
const List = require('../../list/listModel/listModel')

module.exports = function deleteBoard(req, res) {
  const { id } = req.params
  Board.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({ success: 'Deletion Succeded', result })
      List.deleteMany({ boardId: id })
        .then(result => {
          console.log('deleted all list items connected to Setlist.')
        })
        .catch(error => console.error('Could not delete', error))
    })
    .catch(error => console.error('Chould not delete ', error))
}
