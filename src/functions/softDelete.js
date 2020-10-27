export default (Schema) => async (req, res, next) => {
  try {
    const { params, autoInject = {} } = req
    const { id } = params

    const finder = {
      _id: id,
      ...autoInject
    }

    const update = { status: 'deleted' }
    await Schema.updateOne(finder, update)

    res.status(200).send({ status: 200, message: 'softDeleteSuccess' })
  } catch (err) {
    res.status(409).send({ status: 409, message: 'softDeleteError', error: err.message || err })
  } finally {
    next()
  }
}
