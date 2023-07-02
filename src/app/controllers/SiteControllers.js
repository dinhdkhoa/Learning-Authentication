const siteControllers = {
  getHomePage(req, res) {
    res.render("home")
  },
  getSearchPage(req, res) {
    res.render("search")
  },
  postSearchPage(req, res) {
    res.render("search")
  }
}

export default siteControllers
