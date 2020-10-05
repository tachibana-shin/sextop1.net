import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"

// import plugins
import VueProgressBar from "vue-progressbar"
import VueTouchScroll from "vue-touch-scroll"

Vue.use(VueProgressBar)
Vue.use(VueTouchScroll)

new Vue({
   el: "#app",
   router,
   components: { App },
   template: "<App/>"
})