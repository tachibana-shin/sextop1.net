import Vue from "vue"
import Router from "vue-router"
import Home from "../pages/Home.vue"
import ViewFilm from "../pages/View-Film.vue"

Vue.use(Router)

const routes = [
   {
      path: "/",
      component: Home
   },
   {
      path: "/xem-phim/:name",
      component: ViewFilm
   },
   {
      path: "/tag/:tag",
      component: Home
   },
   {
      path: "/type/:type",
      component: Home
   }
]

export default new Router({
   routes,
   scrollBehavior(from, to, saved) {
      return saved || { x: 0, y: 0 }
   }
})