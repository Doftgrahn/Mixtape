const genius = require('genius-lyrics')
const Genius = new genius.Client(process.env.genius_token)

module.exports = async function getTracks(req, res) {
  const { songTitle } = req.params
  try {
    const search = await Genius.findTrack(songTitle)
    const { hits } = search.response
    const result = hits.map(song => song.result)
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: error })
  }
}
