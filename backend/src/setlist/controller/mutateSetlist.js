const Setlist = require('../setlistModel/setlist')

module.exports = function mutateSetlist(req, res) {
  const { id, title } = req.params
  Setlist.findOneAndUpdate({ _id: id }, title, { upsert: true })
    .then(setlist => {
      if (!setlist) return res.status(404).json({ error: 'board could not be found' })
      res.status(200).json(setlist)
    })
    .catch(error => res.status(500).json({ error: 'Could not get boards', error }))
}
