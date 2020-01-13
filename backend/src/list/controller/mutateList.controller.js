const List = require('../listModel/listModel')

module.exports = function mutateList(req, res) {
  const { id, song, artist } = req.body
  List.findOneAndUpdate({ _id: id }, { song: song, artist: artist })
    .then(result => {
      console.log(result)

      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({ error: error })
    })
}
