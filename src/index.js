import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import passport from 'passport'

import {
  decoder,
  unauthorized,
  jwt,
  sort
} from './middleware'

import initDatabase from './initDatabase'
import initRoutes from './initRoutes'
import pipeline from './middleware/pipeline'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.use(compression())

app.use(passport.initialize())
app.use(passport.session())

app.use(helmet())

app.use(decoder)
app.use(jwt)
app.use(pipeline)
app.use(sort)

initDatabase()
initRoutes(app)

app.listen(PORT, () => console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`))

app.use(unauthorized)
