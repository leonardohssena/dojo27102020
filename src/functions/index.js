import softDelete from './softDelete'
import get from './get'
import post from './post'
import patch from './patch'
import insertMany from './insertMany'

const reducer = (params) => (acc, [ key, value ]) => ({ ...acc, [key]: value(...params) })

const functions = {
  get,
  post,
  patch,
  softDelete,
  insertMany
}

export default (...params) => {
  const onReducer = reducer(params)

  return Object
    .entries(functions)
    .reduce(onReducer, {})
}
