import CourseModel from '../models/Course.js'

const coursesControllers = {
  async getCourseDetail(req, res, next) {
    const { slug } = req.params
    const course = await CourseModel.findOne({ slug }).exec()
    if (course) {
      res.render('courses/detail', { course: course.toObject() })
      return
    }
    res.status(400).render('page404')
  },
  getCreatePage(req, res) {
    res.render('courses/create')
  },
  async postCourseFromCreatePage(req, res) {
    const course = new CourseModel(req.body)
    await course.save()
    res.redirect('/')
  }
}

export default coursesControllers
