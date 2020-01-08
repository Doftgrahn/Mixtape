const Board = require('../boardModel/board')

module.export = function createBoard(req, res) {
  const { userId } = req.body

  Board.findOne({ id: userId }).then(user => {
    const newBoard = new Board({
      userId: userId
    })

    newBoard
      .save()
      .then(user => res.json(user))
      .catch(error => res.status(500).send('Could not create', error))
  })
}
