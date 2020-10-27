export default (Schema) => async (req, res, next) => {
  try {
    const { params, autoInject = {}, body } = req
    const { id } = params

    const finder = {
      _id: id,
      ...autoInject
    }

    await Schema.updateOne(finder, body)

    res.status(200).send({ status: 200, message: 'patchSuccess' })
  } catch (err) {
    res.status(409).send({ status: 409, message: 'patchError', error: err.message || err })
  } finally {
    next()
  }
}
