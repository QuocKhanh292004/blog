class CourseController {
  index(req, res) {
    res.send("Danh sách khoá học");
  }

  show(req, res) {
    const slug = req.params.slug;
    res.send(`Chi tiết khoá học: ${slug}`);
  }
}

module.exports = new CourseController();
