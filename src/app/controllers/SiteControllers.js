import CoursesModel from '../models/Course.js'

const siteControllers = {
  async getHomePage(req, res) {
    try {
      const courses = await CoursesModel.find({})
      res.json(courses)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  getSearchPage(req, res) {
    res.render('search')
  },
  postSearchPage(req, res) {
    res.render('search')
  }
}

export default siteControllers
