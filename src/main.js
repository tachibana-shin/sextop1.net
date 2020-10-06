import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App"
import router from "./router"

// import plugins
import VueProgressBar from "vue-progressbar"
import VueTouchScroll from "vue-touch-scroll"
import axios from "axios"

Vue.use(VueProgressBar)
Vue.use(VueTouchScroll)

Vue.prototype.$axios = axios

new Vue({
   el: "#app",
   router,
   components: { App },
   template: "<App/>"
})