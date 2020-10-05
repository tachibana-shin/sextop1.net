const JSDOM = require("jsdom").JSDOM

function htmlResultToJSON(req, res, html) {

   const dom = new JSDOM(html).document;

   res.json({
      state: {
         error: false,
         state: 200,
         message: ""
      },
      data: [...dom.querySelectorAll(".thumb")].map(item => {

         return {
            poster: item.querySelector(".dp-thumb > figure > img").getAttribute("src"),
            name: item.querySelector(".entry-title a").textContent,
            path: item.querySelector(".dp-thumb").getAttribute("href").replace(/https?:\/\/sextop1.(net|pro|com|\w{3})\//g, "")
         }
      })
   })

}

module.exports = {
   default (req, res) {
      axios.get("https://sextop1.pro")
         .then(res => res.data)
         .then(html => htmlResultToJSON(req, res, html))
   },
   tag(rq, res) {
      axios.get(`https://sextop1.pro/${rq.params.tag}`)
         .then(res => res.data)
         .then(html => htmlResultToJSON(req, res, html))
   },
   type(rq, res) {
      axios.get(`https://sextop1.pro/${rq.params.type}`)
         .then(res => res.data)
         .then(html => htmlResultToJSON(req, res, html))
   }

}