import UserSchema from '../../users/models/schema'

export default async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ _id: req.user.id })

    if (!user || user.role !== 'admin') {
      return res.status(200).send({ status: 400, message: 'Invalid User' })
    }

    req.body.created_by = user._id
    next()
  } catch (error) {
    console.log(error)
    res.status(200).send({ status: 500, message: 'Invalid User' })
  }
}
