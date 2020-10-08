import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"

// import plugins
import VueProgressBar from "vue-progressbar"
import axios from "axios"

Vue.use(VueProgressBar)

Vue.prototype.$axios = axios

new Vue({
   el: "#app",
   router,
   components: { App },
   template: "<App/>"
})
