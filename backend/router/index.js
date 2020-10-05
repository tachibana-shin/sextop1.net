const home = require("./routes/home")
const film = require("./routes/film")
const post = require("./routes/post")

module.exports = app => {
   app.route("/api/home(/page/:page)?")
      .get(home.default)
   app.route("/api/home/tag/:tag(/page/:page)?")
      .get(home.tag)
   app.route("/api/home/type/:type(/page/:page)?")
      .get(home.type)
   app.route("/api/film/:name")
      .get(film.default)
   app.route("/api/post/:id/:type")
      .get(post.default)
}