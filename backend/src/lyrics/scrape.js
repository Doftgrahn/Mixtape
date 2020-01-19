const scraper = require('azlyrics-scraper')
const genius = require('genius-lyrics')

module.exports = async url => {
  const Genius = new genius.Client(
    'qLiMT_m5WQ2R4bR7I5zNIqh6XCJLxECg9n2jQiF0emwF550xs3rtwb_4L-sSM-L8'
  )

  //const search = await Genius.findTrack('valborg')
  //   console.log(search.response.hits)
  //   const lyricsJSON = await Genius.getLyrics(url)
  //   console.log('Lyrics', lyricsJSON)

  //   scraper
  //     .getLyric('river en vacker dröm')
  //     .then(result => {
  //       console.log(result.join(''))
  //     })
  //     .catch(error => {
  //       console.log('no lyric')
  //       // Error handling here
  //     })
  //   scraper
  //     .search('jump')
  //     .then(result => {
  //       console.log(result)
  //     })
  //     .catch(error => {
  //       console.log('no search')
  //       // Error handling here
  //     })
  //   scraper
  //     .getLyricFromLink('https://www.azlyrics.com/lyrics/johnnycash/rockislandline.html')
  //     .then(result => {
  //       console.log(result.join(''))
  //     })
  //     .catch(error => {
  //       console.log('no lyric')
  //       // Error handling here
  //     })
}
