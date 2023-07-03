import express from 'express'
import SiteRoutes from './site.js'
import NewsRoutes from './news.js'

const router = express.Router()
router.use('/', SiteRoutes)
router.use('/news', NewsRoutes)

const routes = router

export default routes
