export default {
  login: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: [ 'admin', 'user' ],
    default: 'user'
  },
  status: {
    type: String,
    enum: [ 'active', 'deleted' ],
    default: 'active'
  }
}
