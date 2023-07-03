import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
  title: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updateddAt: { type: Date, default: Date.now }
})

const CourseModel = mongoose.model('Course', CourseSchema)
export default CourseModel
