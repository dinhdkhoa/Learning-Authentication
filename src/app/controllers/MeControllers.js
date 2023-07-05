import CourseModel from '../models/Course.js'

const meControllers = {
  async getCourses(req, res) {
    try {
      const courses = await CourseModel.find()
      res.render('me/my_courses', {
        courses: courses.map((course) => course.toJSON())
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getDeletedCourses(req, res) {
    try {
      const courses = await CourseModel.findDeleted()
      res.render('me/deleted_courses', {
        courses: courses.filter((course) => course.deleted).map((course) => course.toJSON())
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}

export default meControllers
