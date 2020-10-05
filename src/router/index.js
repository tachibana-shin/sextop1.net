import Vue from "vue"
import Router from "vue-router"
import Home from "../pages/Home.vue"
import ViewFilm from "../pages/View-Film.vue"

Vue.use(Router)

function multiplePath(array) {
   const routes = []

   array.forEach(item => {
      if (Array.isArray(item.path)) {
         routes.push(...item.path.map(path => {
            return {
               component: item.component,
               path
            }
         }))
      } else {
         routes.push(item)
      }
   })

   return routes
}

const routes = multiplePath([
   {
      path: [
         "/",
         "/page/:page",
         "/tag/:tag", 
         "/tag/:tag/page/:page",
         "/type/:type",
         "/type/:type/page/:page"
      ],
      component: Home
   },
   {
      path: "/xem-phim/:name",
      component: ViewFilm
   }
])

export default new Router({
   routes,
   scrollBehavior(from, to, saved) {
      return saved || { x: 0, y: 0 }
   }
})