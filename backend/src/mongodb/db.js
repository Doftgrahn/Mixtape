const { mongoUri } = require('../config/config')

module.exports = async mongoose => {
  await mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log('Connected do DataBase, Yihaa'))
    .catch(error => console.error('something went wrong', error))
}
