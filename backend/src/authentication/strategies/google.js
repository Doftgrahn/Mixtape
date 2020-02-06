import passport from 'passport'
import passportGoogle from 'passport-google-oauth'
const GoogleStrategy = passportGoogle.OAuth2Strategy
import User from '../UserModel/User'

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
  new GoogleStrategy(strategyOptions, (accessToken, _refreshToken, profile, done) => {
    const email = profile.emails.map(mail => mail.value)[0]
    User.findOne({ email: email })
      .then(currentUser => {
        if (currentUser) {
          User.findOneAndUpdate({ email: email }, { googleToken: accessToken }, { new: true })
            .then(updatedUser => {
              return done(null, currentUser)
            })
            .catch(error => {
              console.log('Could not update token')
            })
        } else {
          const newUser = new User({
            name: profile.displayName,
            googleId: profile.id,
            avatar: profile.photos,
            email: email,
            googleToken: accessToken
          })
          newUser
            .save()
            .then(user => {
              done(null, user)
            })
            .catch(_error => {})
        }
      })
      .catch(_error => {})
  })
)
