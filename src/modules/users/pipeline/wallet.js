import { Types } from 'mongoose'

export default async (req, _, next) => {
  const pipeline = [
    {
      $match: {
        _id: new Types.ObjectId(req.user.id)
      }
    },
    {
      $lookup: {
        from: 'wallets',
        localField: '_id',
        foreignField: 'user',
        as: 'wallet'
      }
    },
    {
      $unwind: {
        path: '$wallet',
      }
    },
    {
      $group: {
        _id: '$_id',
        coins: { '$sum': '$wallet.coin' }
      }
    },
    {
      $project: {
        _id: false,
        coins: true
      }
    }
  ]

  req.setPipeline(pipeline)

  next()
}
