const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class siteController {
  // [GET] /
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.render("home", {
        courses: mutipleMongooseToObject(courses),
      });
    } catch (error) {
      res.status(500).json({ error: "Lỗi server", details: error.message });
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new siteController();
