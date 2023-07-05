import CourseModel from '../models/Course.js'

const coursesControllers = {
  // GET /:slug
  async getCourseDetail(req, res, next) {
    const { slug } = req.params
    const course = await CourseModel.findOne({ slug }).exec()
    if (course) {
      res.render('courses/detail', { course: course.toObject() })
      return
    }
    res.status(400).render('page404')
  },
  // GET /edit/:id
  async getCourseDetailToEdit(req, res, next) {
    const { id } = req.params
    const course = await CourseModel.findOne({ _id: id }).exec()
    if (course) {
      res.render('courses/edit', { course: course.toObject() })
      return
    }
    res.status(400).render('page404')
  },
  // PUT /edit/:id
  async editCourse(req, res) {
    const { id } = req.params
    await CourseModel.findOneAndUpdate({ _id: id }, req.body)
    res.redirect('/me/courses')
  },
  // PATCH /edit/:id
  async restoreCourse(req, res) {
    const { id } = req.params
    const course = await CourseModel.findOneDeleted({ _id: id })
    try {
      await course.restore({ deleted: false, _id: id })
      res.status(200).send('Restored')
    } catch (error) {
      // Handle the error
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  },
  // Soft Delete /edit/:id
  async destroyCourse(req, res) {
    const { id } = req.params
    const course = await CourseModel.findOne({ _id: id }).exec()
    try {
      await course.delete({ deleted: true, _id: id, deletedAt: new Date() })
      res.status(200).send('Deleted')
    } catch (error) {
      // Handle the error
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  },
  // Force Delete /delete/:id
  async forceDestroyCourse(req, res) {
    const { id } = req.params
    try {
      await CourseModel.deleteOne({ _id: id })
      res.status(200).send('Deleted')
    } catch (error) {
      // Handle the error
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  },
  // GET /create
  getCreatePage(req, res) {
    res.render('courses/create')
  },
  // POST /create
  async postCourseFromCreatePage(req, res) {
    const course = new CourseModel(req.body)
    await course.save()
    res.redirect('/me/courses')
  }
}

export default coursesControllers
