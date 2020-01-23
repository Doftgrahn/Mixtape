import passport from 'passport'
const SpotifyStrategy = require('passport-spotify').Strategy
import User from '../UserModel/User'

const strategyOptions = {
  clientID: process.env.spotify_client_id,
  clientSecret: process.env.spotify_client_secret,
  callbackURL: '/api/users/spotify/redirect',
  proxy: true
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new SpotifyStrategy(strategyOptions, (accessToken, refreshToken, profile, done) => {
    User.findOne({ spotifyId: profile.id })
      .then(currentUser => {
        if (currentUser) {
          return done(null, currentUser)
        } else {
          const newUser = new User({
            name: profile.displayName,
            spotifyId: profile.id,
            avatar: profile.photos,
            token: accessToken
          })
          newUser
            .save()
            .then(user => {
              console.log('new user created', user)
              done(null, user)
            })
            .catch(error => {
              console.log('error', error)
            })
        }
      })
      .catch(error => {
        console.log('error', error)
      })
  })
)
