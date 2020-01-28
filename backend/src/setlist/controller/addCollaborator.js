const Setlist = require('../setlistModel/setlist')

module.exports = function addCollaborator(req, res) {
  const { userId, setlistId } = req.body

  Setlist.findById(setlistId)
    .then(list => {
      const { collaborators } = list
      const collaboratorAlreadyExists = collaborators.find(x => x === userId)
      if (collaboratorAlreadyExists) {
        return res.status(404).json('User already member.')
      } else {
        Setlist.findOneAndUpdate(
          { _id: setlistId },
          { $push: { collaborators: userId } },
          { new: true }
        )
          .then(setlist => {
            console.log(setlist)
            res.status(200).json(setlist)
          })
          .catch(error => {
            res.json({ error: 'Could not add', error })
          })
      }
    })
    .catch(error => {
      console.log('hej', error)
    })
}
