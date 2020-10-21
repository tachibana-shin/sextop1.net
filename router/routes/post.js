const JSDOM = require("jsdom").JSDOM
const axios = require("axios")

module.exports = {
   default (rq, res) {
      axios({
            url: "https://sextop1.pro/wp-admin/admin-ajax.php",
            method: "post",
            data: `action=dp_get_popular_posts&showpost=${rq.params.id}&type=${rq.params.type}`,
            timeout: 30000
         })
         .then(res => res.data)
         .then(html => {
            const dom = new JSDOM(html).window.document

            res.json({
               state: {
                  error: false,
                  code: 200,
                  message: ""
               },
               data: [...dom.querySelectorAll(".item")].map(item => ({
                  poster: item.querySelector(".post-thumb").getAttribute("src"),
                  name: item.querySelector(".title").textContent,
                  view: item.querySelector(".viewsCount").textContent.replace(/\D/g, ""),
                  path: item.querySelector(".item-link").getAttribute("href").replace(/https?:\/\/sextop1\.(net|pro|com|\w{2,4})\//g, "").replace(/\/$/, "")
               }))
            })
         })

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
