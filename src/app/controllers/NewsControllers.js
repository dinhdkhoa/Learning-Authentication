const newsController = {
  getNews(req, res) {
    res.render('news')
  },
  getNewsDetail(req, res) {
    res.send(`<h1>Hello world</h1>`)
  }
}

export default newsController
