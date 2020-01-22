let uri = process.env.mongo_uri_production
if (process.env.NODE_ENV === 'development') {
  uri = process.env.mongo_uri_development
}

module.exports = {
  mongoUri: uri,
  secretOrKey: process.env.secret
}
