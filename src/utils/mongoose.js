import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://aaronfabela:11081998Aa@cluster0.rtutgar.mongodb.net/?retryWrites=true&w=majority'
    )
  } catch (error) {
    console.log(error)
  }
}
