const Setlist = require('../setlistModel/setlist')

module.exports = async function getAllSetlists(req, res) {
  const { id } = req.params
  const mySetlist = await Setlist.find({ userId: id }).sort({ date: -1 })

  const collaborators = await Setlist.find({ collaborators: id }).sort({ date: -1 })
  const setlists = {
    mySetlist,
    collaborators
  }

  res.status(200).json(setlists)
}
