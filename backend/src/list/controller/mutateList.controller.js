const List = require('../listModel/listModel')

module.exports = function mutateList(req, res) {
  const { id, title } = req.body
  List.findOneAndUpdate({ _id: id }, { title: title })
    .then(result => {
      console.log(result)

      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({ error: error })
    })
}
