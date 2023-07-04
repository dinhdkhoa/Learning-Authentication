import CoursesModel from '../models/Course.js'

const coursesControllers = {
  async getHomePage(req, res, next) {
    const { slug } = req.params
    const course = await CoursesModel.findOne({ slug }).exec()
    console.log(course.toObject())
    if (course) {
      res.render('courseDetail', { course: course.toObject() })
      return
    }
    res.status(400).render('page404')
  }
}

export default coursesControllers
