import express from 'express'
import coursesControllers from '../app/controllers/CoursesControllers.js'

const router = express.Router()

router.route('/create').get(coursesControllers.getCreatePage).post(coursesControllers.postCourseFromCreatePage)
router.route('/:slug').get(coursesControllers.getCourseDetail)

const CoursesRouter = router

export default CoursesRouter
