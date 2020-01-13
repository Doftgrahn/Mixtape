import passport from 'passport'
import passportGoogle from 'passport-google-oauth'
import { to } from 'await-to-js'

import { getUserByProviderId, createUser } from '../../database/user'
import { signToken } from '../utils'

const GoogleStrategy = passportGoogle.OAuth2Strategy

const strategy = app => {
  const strategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback'
  }

  const verifyCallback = async (accessToken,refreshToken,profile,done ) => {
        let [err, user] = await to(getUserByProviderId(profile.id))
       if (err || user) {  return done(err, user)
        }
  passport.use(new GoogleStrategy(strategyOptions, verifyCallback))

  return app
}

export { strategy }
