import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"

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