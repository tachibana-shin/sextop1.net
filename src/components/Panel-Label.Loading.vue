<template>
   <h3 class="panel-label.loading">
      <span class="slot-default">
      </span>
   </h3>
</template>
<style lang="scss" scoped>
   $bg: rgb((237-170), (240-170), (245-170)); //invert(rgb(237, 240, 245));

   .panel-label\.loading {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(10, 10, 10);

      margin: {
         top: 15px;
         bottom: 15px;
      }

      ;

      &:before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         bottom: 0;
         margin: auto;
         width: 100%;
         height: 1px;
         background-color: rgba(255, 255, 255, .3);
      }

      .slot-default {
         /*border: 1px solid rgba(255, 255, 255, 0.08);*/
         background-color: inherit;
         color: rgb(255, 255, 255);
         font-size: 13px;
         font-weight: normal;
         padding-bottom: 7px;
         padding-left: 15px;
         padding-right: 15px;
         padding-top: 10px;
         text-transform: uppercase;
         z-index: 2;

         background-color: $bg;
         width: 35%;
         height: 1.1rem;
         border-radius: 2.133vw;
         display: block;
         margin-left: 10px;
      }
   }
</style>
<script>
   export default {

   }
</script>