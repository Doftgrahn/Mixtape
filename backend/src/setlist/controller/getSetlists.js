const Setlist = require('../setlistModel/setlist')

module.exports = function getAllSetlists(req, res) {
  const { id } = req.params
  Setlist.find({ userId: id })
    .sort({ date: -1 })
    .then(setlist => {
      if (!setlist) return res.status(404).json({ error: 'board could not be found' })
      res.status(200).json(setlist)
    })
    .catch(error => res.status(500).json({ error: 'Could not get boards', error }))
}
