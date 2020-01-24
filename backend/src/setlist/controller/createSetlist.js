const User = require('../../authentication/UserModel/User')
const Setlist = require('../setlistModel/setlist')

module.exports = function createSetlist(req, res) {
  const { userId, title } = req.body

  User.findOne({ _id: userId })
    .then(user => {
      if (!user)
        res.json({ error: 'Could not find user, that problably means you are not logged in.' })

      const newBoard = new Setlist({
        userId: userId,
        title: title,
        date: Date.now(),
        isOwner: true
      })
      newBoard
        .save()
        .then(user => res.json(user))
        .catch(() => res.status(500).json({ error: 'Could not create setlist right now.' }))
    })
    .catch(e => {
      res.status(404).json({ error: e })
    })
}
