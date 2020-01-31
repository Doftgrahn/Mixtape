const Setlist = require('../setlistModel/setlist')

module.exports = async function mutateSetlist(req, res) {
  const { id, title } = req.params
  const updateSetlist = await Setlist.findOneAndUpdate({ _id: id }, title, { upsert: true })
  res.status(200).json(updateSetlist)
}
