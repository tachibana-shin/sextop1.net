<template>
   <div class="bac.animation"></div>
</template>
<script>
   export default {

   }
</script>
<style lang="scss" scoped>
   .bac\.animation {
      animation: backpos 1s ease-in-out infinite;

      @keyframes backpos {
         0% {
            background-position-x: -200px;
         }

         to {
            background-position-x: calc(200px + 100%)
         }
      }

      background: {
         image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .5) 50%, rgba(255, 255, 255, 0) 80%);
         repeat: no-repeat;
         size: 15% 100%;
      }

      height: 250vh;
      position: absolute;
      transform: rotate(20deg) translateX(-150vw);
      width: 250vw;
      z-index: 5;
   }
</style>