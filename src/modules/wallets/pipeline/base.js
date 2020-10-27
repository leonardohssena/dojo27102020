export default async (req, _, next) => {
  const pipeline = [
    {
      $project: {
        _id: 1,
        user: 1,
        coin: 1,
        origin: 1,
        created_by: 1,
        created_at: 1
      }
    }
  ]

  req.setPipeline(pipeline)

  next()
}
