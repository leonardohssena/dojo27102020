export default (Schema) => async (req, res, next) => {
  try {
    const { body } = req

    await Schema.create(body)

    res.status(200).send({ status: 200, message: 'postSuccess' })
  } catch (err) {
    res.status(409).send({ status: 409, message: 'postError', error: err.message || err })
  } finally {
    next()
  }
}
