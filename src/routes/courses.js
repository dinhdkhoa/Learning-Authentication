import express from 'express'
import coursesControllers from '../app/controllers/CoursesControllers.js'

const router = express.Router()

router.route('/:slug').get(coursesControllers.getHomePage)

const CoursesRouter = router

export default CoursesRouter
