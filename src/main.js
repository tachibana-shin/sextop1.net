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

import axios from "/js/axios.js"

axios.post("https://cors-anywhere.herokuapp.com/https://sextop1.pro/wp-admin/admin-ajax.php", "action=dp_get_popular_posts&showpost=6&type=day", {
      headers: {
         "Content-Type": "application/x-ww   w-form-urlencoded; charset=UTF-8",
         "Accept": "text/html, */*; q=0.01",
         "X-Requested-With": "XMLHttpRequest"
      }
   })
   .then(res => res.data)
   .then(res => console.log(res))