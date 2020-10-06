<template>
   <div class="card-film">
      <div class="groups.poster"></div>
      <div class="groups.title">
         <h2>
            <span class="tx-1"></span>
            <span class="tx-2"></span>
         </h2>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   $bg: rgb((237-170), (240-170), (245-170));//invert(rgb(237, 240, 245));

   .card-film {
      margin-bottom: 20px;
      padding: 3px;
      position: relative;
      box-sizing: border-box;

      .groups\.poster {
         width: 100%;
         height: 126px;
         background-color: $bg;
         border-radius: 5px;
      }

      .groups\.title {
         background-image: linear-gradient(rgba(0, 0, 0, 0) 0, rgba(6, 6, 6, 0) 30%, rgba(0, 0, 0, 0) 100%);
         height: 40px;
         line-height: 18px;
         width: 100%;

         h2 {
            font-size: 9px;
            font-weight: bold;
            line-height: 19px;
            margin-right: 3px;
            margin-top: 7px;
            padding: 3px;
            text-align: center;

            span {
               background-color: $bg;
               width: 100%;
               height: 1rem;
               border-radius: 2.133vw;
               display: block;
               margin-bottom: 3px;
               &.tx-2 {
                  width: 40%;
               }
            }
         }
      }
   }
</style>
<script>
   export default {

   }
</script>