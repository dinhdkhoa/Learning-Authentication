import mongoose from 'mongoose'
import slug from 'mongoose-slug-updater'

mongoose.plugin(slug)

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    img: { type: String },
    vidId: { type: String, required: true },
    slug: { type: String, slug: 'title', unique: true }
  },
  {
    timestamps: true
  }
)

const CourseModel = mongoose.model('Course', CourseSchema)
export default CourseModel
