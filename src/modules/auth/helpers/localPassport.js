import passport from 'passport'
import passportLocal from 'passport-local'

import UsersSchema from '../../users/models/schema'

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

const onError = { status: 401, message: 'Dados de acesso inválidos. Tente novamente.' }

const localPassport = ({ usernameField }) => {
  passport.use(
    'local.user',
    new passportLocal.Strategy(
      { usernameField },
      async (value, password, done) => {
        const user = await UsersSchema
          .findOne({ [usernameField]: value, status: 'active' })
        if (!user) return done(onError, false)
        if (!user.comparePassword(password)) return done(onError, false)
        return done(null, user)
      }
    )
  )
}

export default localPassport
