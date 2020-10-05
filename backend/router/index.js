const home = require("./routes/home")
const film = require("./routes/film")
const post = require("./routes/post")

module.exports = app => {
   app.route("/api/home")
      .get(home.default)
   app.route("/api/home/tag/:tag")
      .get(home.tag)
   app.route("/api/home/type/:type")
      .get(home.type)
   app.route("/api/film/:name")
      .get(film.default)
      app.route("/api/post/:id/:type")
      .get(post.default)
}