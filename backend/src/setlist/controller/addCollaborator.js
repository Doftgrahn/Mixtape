const User = require('../../authentication/UserModel/User')
const Setlist = require('../setlistModel/setlist')

module.exports = function addCollaborator(req, res) {
  const { userId, setlistId } = req.body

  Setlist.findOneAndUpdate({ _id: setlistId }, { $push: { collaborators: userId } })
    .then(setlist => {
      console.log(setlist)
      res.status(200).json(setlist)
    })
    .catch(error => {
      res.json({ error: 'Could not add', error })
    })
}
