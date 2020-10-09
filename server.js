const express = require("express")
const history = require("connect-history-api-fallback")
const app = express()
const path = require("path")
const serveStatic = require("serve-static")

const router = require("./router")

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

app.use(history())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require("cors")())
app.use(serveStatic(__dirname + "/dist"));

router(app)

/*
app.use(function(req, res) {
   res.status(404).send({
      state: {
         error: true,
         code: 404,
         message: "Not Found"
      },
      data: {}
   })
})*/

app.listen(port, () => console.log(`App it running in port ${port}`))
