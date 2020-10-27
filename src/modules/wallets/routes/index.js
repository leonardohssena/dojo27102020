import { Router } from 'express'

import Functions from '../support/functions'

import { base } from '../pipeline'
import checkIsAdmin from './checkIsAdmin'

const Routes = Router()
  .get(
    '/',
    checkIsAdmin,
    base,
    Functions.get
  )
  .post(
    '/',
    checkIsAdmin,
    Functions.post
  )
  .patch(
    '/:id',
    checkIsAdmin,
    Functions.patch
  )
  .delete(
    '/:id',
    checkIsAdmin,
    Functions.softDelete
  )

export default Routes
