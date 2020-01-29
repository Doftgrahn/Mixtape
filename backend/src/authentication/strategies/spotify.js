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
    const email = profile.emails.map(mail => mail.value)[0]

    User.findOne({ email: email })
      .then(currentUser => {
        if (currentUser) {
          User.findOneAndUpdate(
            { email: email },
            { spotifyToken: accessToken, spotifyId: profile.id },
            { new: true }
          )
            .then(updatedUser => {
              console.log('updated Token')
              return done(null, updatedUser)
            })
            .catch(error => {
              console.log('could not update token', error)
            })
        } else {
          const newUser = new User({
            name: profile.displayName,
            spotifyId: profile.id,
            avatar: profile.photos,
            spotifyToken: accessToken
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
