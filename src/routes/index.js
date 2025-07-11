const newsRouter = require("./new");
const siteRouter = require("./site");
function route(app) {
  app.use("/new", newsRouter);
  app.use("/", siteRouter);
}
module.exports = route;
