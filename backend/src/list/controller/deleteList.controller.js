const List = require('../listModel/listModel')
module.exports = function deleteListController(req, res) {
  const { id } = req.params
  List.deleteOne({ _id: id })
    .then(result => {
      res.status(200).json({ success: 'deletion sucess', result })
    })
    .catch(error => res.status(404).json({ error: error }))
}
