import Vue from "vue"
import Router from "vue-router"

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
      component: () => import("../pages/Home.vue")
   },
   {
      path: "/xem-phim/:name",
      component: () => import("../pages/View-Film.vue")
   },
   {
      path: "*",
      redirect: "/"
   }
])

export default new Router({
   mode: "history",
   routes,
   scrollBehavior(from, to, saved) {
      return saved || { x: 0, y: 0 }
   },
   linkExactActiveClass: "active"
})
