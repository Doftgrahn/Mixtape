import passport from 'passport'
import passportGoogle from 'passport-google-oauth'
const GoogleStrategy = passportGoogle.OAuth2Strategy
const User = require('../UserModel/User')

const strategyOptions = {
  clientID: process.env.google_client_id,
  clientSecret: process.env.google_client_secret,
  callbackURL: '/api/users/google/redirect',
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
  new GoogleStrategy(strategyOptions, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then(currentUser => {
        if (currentUser) {
          return done(null, currentUser)
        } else {
          const newUser = new User({
            name: profile.displayName,
            googleId: profile.id,
            avatar: profile.photos,
            email: profile.emails,
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
