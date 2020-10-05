const JSDOM = require("jsdom").JSDOM
const axios = require("axios")

function htmlResultToJSON(req, res, html) {

   const dom = new JSDOM(html).window.document;

   res.json({
      state: {
         error: false,
         state: 200,
         message: ""
      },
      data: {
         name: dom.querySelector(".section-title > span").textContent,
         title: dom.querySelector("title").textContent,
         description: dom.querySelector("meta[name=\"description\"]").textContent,
         items: [...dom.querySelectorAll(".thumb")].map(item => {

            return {
               poster: item.querySelector(".dp-thumb > figure > img").getAttribute("src"),
               name: item.querySelector(".entry-title a").textContent,
               path: item.querySelector(".dp-thumb").getAttribute("href").replace(/https?:\/\/sextop1\.(net|pro|com|\w{3})\//g, "").replace(/\/$/, "")
            }
         })
      }
   })

}

module.exports = {
   default (rq, res) {
      axios.get(`https://sextop1.pro/${rq.params.page ? '/page/' + rq.params.page : ''}`)
         .then(res => res.data)
         .then(html => htmlResultToJSON(rq, res, html))
         .catch(({ stack, message }) => {
            res.json({
               state: {
                  error: false,
                  code: message,
                  message: "Unknown"
               },
               data: {}
            })
         })
   },
   tag(rq, res) {
      axios.get(`https://sextop1.pro/${rq.params.tag}/${rq.params.page ? '/page/' + rq.params.page : ''}`)
         .then(res => res.data)
         .then(html => htmlResultToJSON(rq, res, html))
         .catch(({ stack, message }) => {
            res.json({
               state: {
                  error: false,
                  code: message,
                  message: "Unknown"
               },
               data: {}
            })
         }) 
   },
   type(rq, res) {
      axios.get(`https://sextop1.pro/tag/${rq.params.type}/${rq.params.page ? '/page/' + rq.params.page : ''}`)
         .then(res => res.data)
         .then(html => htmlResultToJSON(rq, res, html))
         .catch(({ stack, message }) => {
            res.json({
               state: {
                  error: false,
                  code: message,
                  message: "Unknown"
               },
               data: {}
            })
         }) 
   }

}