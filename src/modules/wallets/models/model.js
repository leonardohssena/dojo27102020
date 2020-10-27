import { Schema } from 'mongoose'

export default {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  coin: {
    type: Number,
    default: 0
  },
  origin: {
    type: String,
    trim: true
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  created_at: {
    type: Date,
    default: new Date()
  }
}
