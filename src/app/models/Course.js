import mongoose from 'mongoose'
import slug from 'mongoose-slug-updater'
import mongoose_delete from 'mongoose-delete'

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    img: { type: String },
    vidId: { type: String, required: true },
    level: { type: String, required: true },
    slug: { type: String, slug: 'title', unique: true }
  },
  {
    timestamps: true
  }
)

mongoose.plugin(slug)
CourseSchema.plugin(mongoose_delete, { overrideMethods: 'all' })

const CourseModel = mongoose.model('Course', CourseSchema)
export default CourseModel
