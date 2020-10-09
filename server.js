const express = require("express")
const app = express()
const history = require("connect-history-api-fallback")
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

app.listen(port, () => console.log(`App it running in port ${port}`))