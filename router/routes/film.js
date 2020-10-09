const JSDOM = require("jsdom").JSDOM
const axios = require("axios")

module.exports = {
   default (rq, res) {
      axios.get(`https://sextop1.pro/${rq.params.name}`)
         .then(res => res.data)
         .then(html => {
            const dom = new JSDOM(html).window.document

            res.json({
               state: {
                  error: false,
                  code: 200,
                  message: ""
               },
               data: {

                  name: dom.querySelector(".entry-title").textContent,
                  stream: dom.querySelector(".videoWrapper > iframe").getAttribute("src"),
                  description: dom.querySelector(".entry-content .item-content > p").textContent,
                  tags: [...dom.querySelectorAll(".the_tag_list > a[rel=tag]")].map(item => ({
                     path: item.getAttribute("href").replace(/https?:\/\/sextop1\.(net|pro|com|\w{3})\//g, "").replace(/\/$/, ""),
                     text: item.textContent
                  })),
                  categorys: [...dom.querySelectorAll(".the_tag_list > a[rel=\"category tag\"]")].map(item => ({
                     path: item.getAttribute("href").replace(/https?:\/\/sextop1\.(net|pro|com|\w{3})\//g, "").replace(/\/$/, ""),
                     text: item.textContent
                  })),
                  dpThumb: [...dom.querySelectorAll(".dp-item")].map(item => {
                     return {
                        poster: item.querySelector(".dp-thumb > figure > img").getAttribute("src"),
                        name: item.querySelector(".entry-title a").textContent,
                        path: item.querySelector(".dp-thumb").getAttribute("href").replace(/https?:\/\/sextop1\.(net|pro|com|\w{3})\//g, "").replace(/\/$/, "")
                     }
                  }),
                  idPost: dom.querySelector(".ajax-tab").getAttribute("data-showpost")
               }
            })
         })
								  .catch(e => console.log(e))
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
