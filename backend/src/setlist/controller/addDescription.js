const Setlist = require('../setlistModel/setlist')

module.exports = async function addDescription(req, res) {
  const { id, description } = req.body
  const updateSetlist = await Setlist.findOneAndUpdate(
    { _id: id },
    { description },
    { upsert: true }
  )
  res.status(200).json(updateSetlist)
}
