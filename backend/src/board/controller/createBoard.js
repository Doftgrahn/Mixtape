const User = require('../../authentication/UserModel/User')
const Board = require('../boardModel/board')

module.exports = function createBoard(req, res) {
  const { userId } = req.body

  User.findOne({ _id: userId }).then(user => {
    if (!user)
      res.json({ error: 'Could not find user, that problably means you are not logged in.' })

    const newBoard = new Board({
      userId: userId
    })
    newBoard
      .save()
      .then(user => res.json(user))
      .catch(() => res.status(500).json({ error: 'Could not create board.' }))
  })
}
