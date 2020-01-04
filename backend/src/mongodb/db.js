const { mongoUri } = require('../config/config')

module.exports = async mongoose => {
  try {
    await mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      },
      () => console.log('Connected do DataBase, Yiha!')
    )
  } catch (error) {
    console.error('Something went wrong connecting to database', error)
  }
}
