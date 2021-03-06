const Setlist = require('../setlistModel/setlist')

// FiX
module.exports = function addCollaborator(req, res) {
  const { userId, setlistId } = req.body
  Setlist.findOne({ _id: setlistId._id })
    .then(list => {
      const { collaborators } = list
      const collaboratorAlreadyExists = collaborators.find(x => x === userId)
      if (collaboratorAlreadyExists) {
        return res.status(404).json('User already member.')
      } else {
        Setlist.findOneAndUpdate(
          { _id: setlistId._id },
          { $push: { collaborators: userId } },
          { new: true }
        )
          .then(setlist => {
            res.status(200).json(setlist)
          })
          .catch(e => {
            res.json({ error: 'Could not add', e })
          })
      }
    })
    .catch(error => {
      res.status(404).json(error)
    })
}
