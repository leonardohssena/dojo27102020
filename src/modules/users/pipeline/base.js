export default async (req, _, next) => {
  const pipeline = [
    {
      $project: {
        _id: 1,
        login: 1,
        role: 1
      }
    }
  ]

  req.setPipeline(pipeline)

  next()
}
