<template>
   <div id="app">
      <transition name="swipeY.top:ease">
         <header-app @show-menu="NavListShow = true" v-show="HeaderAppShow" @input="HeaderAppShow = $event" />
      </transition>
      <transition name="fade:ease">
         <backdrop-mark v-if="NavListShow" />
      </transition>
      
      <navbar-nav :class="{ active: NavListShow }" @hide-menu="NavListShow = false"/>
      
      <router-view />
      <footer-app />
   </div>
</template>
<style lang="scss" scoped>
   #app {
      padding-top: 13.867vw;

      .fade\:ease-enter-active,
      .fade\:ease-leave-active {
         transition: all .666s ease;
      }

      .fade\:ease-enter,
      .fade\:ease-leave-to {
         opacity: 0;
      }

      .swipeY\.top\:ease-enter-active {
         animation: swipeYTopEnter .2s ease;

         @keyframes swipeYTopEnter {
            from {
               transform: translateY(-100%);
            }

            to {
               transform: translateY(0);
            }
         }
      }

      .swipeY\.top\:ease-leave-active {
         animation: swipeYTopLeave .2s ease;

         @keyframes swipeYTopLeave {
            from {
               transform: translateY(0);
            }

            to {
               transform: translateY(-100%);
            }
         }
      }
   }
</style>
<script>
   import HeaderApp from "./components/Header.vue"
   import NavbarNav from "./components/NavBar-Nav.vue"
   import FooterApp from "./components/Footer.vue"
   import BackdropMark from "./components/Backdrop-Mark.vue"

   export default {
      components: { HeaderApp, NavbarNav, FooterApp, BackdropMark },
      data: () => ({
         HeaderAppShow: true,
         NavListShow: false
      })
   }
</script>