const home = require("./routes/home")

module.exports = app => {
   app.route("/api/home").get(home.default)
   app.route("/api/home/tag/:tag").get(home.tag)
   app.route("/api/home/type/:type").get(home.type)
}