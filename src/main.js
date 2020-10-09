import Vue from "vue"
import App from "./App"
import router from "./router"

// import plugins
import VueProgressBar from "vue-progressbar"
import axios from "axios"
import VueLazy from "vue-lazyload"

Vue.use(VueProgressBar, {
   color: 'rgb(0, 132, 240)',
   failedColor: '#f00',
   height: 5
})
Vue.use(VueLazy, {
   preLoad: 1.3,
   attempt: 1
})

Vue.prototype.$axios = axios

new Vue({
   el: "#app",
   router,
   components: { App },
   template: "<App/>"
})