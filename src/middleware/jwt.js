import jwt from 'express-jwt'

import config, { unlessPath } from '../config'

export default jwt({ secret: config.secret, algorithms: ['HS256'] }).unless(unlessPath)
