// controllers/siteController.js
const Course = require("../models/Course");

class siteController {
  // [GET] /
  async index(req, res) {
    try {
      const courses = await Course.find({});
      console.log(" Dữ liệu truy vấn:", courses);
      res.json(courses);
    } catch (error) {
      console.error("Lỗi truy vấn Course:", error);
      res.status(500).json({ error: "Lỗi server", details: error.message });
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new siteController();
