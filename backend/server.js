const express = require("express")
const app = express()

const router = require("./router")

const bodyParser = require('body-parser')

const port = 3000//process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port, () => console.log(`App it running in port ${port}`))
 