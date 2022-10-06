import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    user: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('Usuario', userSchema)
