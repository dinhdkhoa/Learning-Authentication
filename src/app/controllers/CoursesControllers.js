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
  async getCourseDetailToEdit(req, res, next) {
    const { id } = req.params
    const course = await CourseModel.findOne({ _id: id }).exec()
    if (course) {
      res.render('courses/edit', { course: course.toObject() })
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
  },
  async editCourse(req, res) {
    const { id } = req.params
    await CourseModel.findOneAndUpdate({ _id: id }, req.body)
    res.redirect('/me/courses')
  },
  async destroyCourse(req, res) {
    const { id } = req.params
    try {
      await CourseModel.deleteOne({ _id: id })
      res.status(200).send('Deleted')
    } catch (error) {
      // Handle the error
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }
}

export default coursesControllers
