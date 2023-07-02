import express from "express"
import SiteControllers from "../app/controllers/SiteControllers.js"

const router = express.Router()

router
  .route("/search")
  .get(SiteControllers.getSearchPage)
  .post(SiteControllers.postSearchPage)
router.route("/").get(SiteControllers.getHomePage)

const SiteRoutes = router

export default SiteRoutes
