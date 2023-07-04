import express from 'express'
import SiteRoutes from './site.js'
import NewsRoutes from './news.js'
import CoursesRouter from './courses.js'
import MeRouter from './me.js'

const router = express.Router()
router.use('/me', MeRouter)
router.use('/courses', CoursesRouter)
router.use('/news', NewsRoutes)
router.use('/', SiteRoutes)

const routes = router

export default routes
