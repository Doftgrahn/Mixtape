const Setlist = require('../setlistModel/setlist')

module.exports = async function getAllSetlists(req, res) {
  const { id } = req.params
  const setList = await Setlist.find({ userId: id }).sort({ date: -1 })
  res.status(200).json(setList)
}
