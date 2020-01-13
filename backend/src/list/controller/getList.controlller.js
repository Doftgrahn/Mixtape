const List = require('../listModel/listModel')

module.exports = function getList(req, res) {
  const { id } = req.params
  List.find({ boardId: id }).then(list => {
    res.status(200).json(list)
  })
}
