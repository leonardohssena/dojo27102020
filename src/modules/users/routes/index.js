import { Router } from 'express'

import Functions from '../support/functions'

import { base } from '../pipeline'

const Routes = Router()
  .get(
    '/',
    base,
    Functions.get
  )
  .post(
    '/',
    Functions.post
  )
  .patch(
    '/:id',
    Functions.patch
  )
  .delete(
    '/:id',
    Functions.softDelete
  )

export default Routes
