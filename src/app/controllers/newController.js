class NewController {
  // [get] /new
  index(req, res) {
    res.render("new");
  }

  // [get] /news/:slug
  show(req, res) {
    res.render("new detail");
  }
}
module.exports = new NewController();
