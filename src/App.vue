<template>
   <div id="app">
      <header-app/>
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
   import '@/awesome/scss/brands.scss'
   import '@/awesome/scss/duotone.scss'
   import '@/awesome/scss/light.scss'
   import '@/awesome/scss/regular.scss'
   import '@/awesome/scss/solid.scss'

   export default {
      components: { HeaderApp, NavbarNav, FooterApp, BackdropMark },
      data: () => ({
         HeaderAppShow: true,
         NavListShow: false
      })
   }
</script>