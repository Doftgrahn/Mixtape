const Setlist = require('../setlistModel/setlist')

module.exports = async function createSetlist(req, res) {
  const { userId, title } = req.body
  const newBoard = new Setlist({
    userId: userId,
    title: title,
    date: Date.now(),
    isOwner: true
  })
  const setlist = await newBoard.save()
  res.json(setlist)
}
