import { concat, pipe, replace } from 'ramda'

const concatMany = (...strs) => strs.reduce(concat, '')
const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = pipe(removeAllSpecialCaracteres, removeAllSpaces)
const randomHash = ({ length = 10 }) => Math.random().toString(36).substr(2, length)
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const removeEmpty = ([ _, value ]) => !!value
const transform = ([ key, value ]) => `${key}=${value}`
const reducer = (acc, value) => (`${acc}${acc ? '&' : '?'}${value}`)
const castParams = (params) => (
  Object
    .entries(params)
    .filter(removeEmpty)
    .map(transform)
    .reduce(reducer, '')
)

const notEmpty = ({ description }) => !!description
const format = ({ description }) => `<br>${description}</br>`
const errorsMessage = (errors = []) => errors
  .filter(notEmpty)
  .map(format)
  .join('')

export {
  concatMany,
  unFormat,
  randomHash,
  randomNumber,
  castParams,
  errorsMessage
}
