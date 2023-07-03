import express from 'express'
import NewsControllers from '../app/controllers/NewsControllers.js'

const router = express.Router()

router.route('/:slug').get(NewsControllers.getNewsDetail)

router.route('/').get(NewsControllers.getNews)

const NewsRoutes = router

export default NewsRoutes
