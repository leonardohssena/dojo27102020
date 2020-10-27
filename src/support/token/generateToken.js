import { sign } from 'jsonwebtoken'

import config from '../../config'

const options = {
  expiresIn: '356d',
  algorithm: 'HS256'
}

export default async (params) => {
  const token = await sign(
    {
      ...options,
      ...params
    },
    `${config.secret}`
  )

  return token
}
