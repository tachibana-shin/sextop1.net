<template>
   <div id="app">
      <vue-progressbar/>
      <header-app />
      <router-view class="router-view" />
      <footer-app />
   </div>
</template>
<style lang="scss" scoped>
   #app {
      //padding-top: 13.867vw;
      box-sizing: border-box;
      position: relative;
      background-color: rgb(40, 40, 40);

      @media (min-width: 772px) {
         .header-app {
            padding: {
               left: 115px;
               right: 115px;
            }

            ;
         }

         .router-view {
            margin: {
               left: 115px;
               right: 115px;
            }
         }
      }
   }
</style>
<script>
   import HeaderApp from "./components/Header.vue"
   import FooterApp from "./components/Footer.vue"

   // @import awesome
   import '@/awesome/scss/fontawesome.scss'
   import '@/awesome/scss/regular.scss'//far
   import '@/awesome/scss/solid.scss'//fas

   export default {
      components: { HeaderApp, FooterApp },
      data: () => ({
         HeaderAppShow: true,
         NavListShow: false
      }),
      mounted() {
         this.$Progress.finish()
      },
      created() {
         this.$Progress.start()
         this.$router.beforeEach((to, from, next) => {
            if (to.meta.progress !== undefined) {
               let meta = to.meta.progress
               // parse meta tags
               this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
         })
         this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
         })
      }
   }
</script>
