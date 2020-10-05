<template>
   <header class="header">
      <div class="wrapper">
         <img class="hambuger" src="/src/assets/nav.ic.menu.svg" @click="$emit('show-menu')">
         <img class="logo" src="/src/assets/nav.ic.logo.svg">
         <span></span>
      </div>
   </header>
</template>
<style lang="scss" scoped>
   .header {
      box-shadow: rgba(8, 13, 39, 0.05) 0 0.533vw 2.133vw 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;

      .wrapper {
         align-items: center;
         background-color: rgb(40, 40, 40);
         display: flex;
         height: 13.867vw;
         justify-content: space-between;
         position: relative;
         width: 100%;

         .hambuger {
            height: 6.4VW;
            margin-left: 4.267vW;
            width: 6.4VW;
         }
      }
   }
</style>
<script>
   export default {
      methods: {
         onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
               return
            }
            if (Math.abs(currentScrollPosition - this.$options.lastScrollPosition) < 120) {
               return
            }
            this.$emit("input", currentScrollPosition < this.$options.lastScrollPosition)
            this.$options.lastScrollPosition = currentScrollPosition
         }
      },
      created() {
         window.addEventListener("scroll", this.onScroll)
      },
      beforeDestroy() {
         window.removeEventListener("scroll", this.onScroll)
      }
   }
</script>