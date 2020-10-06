<template>
   <div class="view-film.loading">
      <bac-animation />
      <ul class="list">
         <li class="item" v-for="item in 10">
            <div class="film">
               <div class="groups.poster">
               </div>
               <div class="groups.info">
                  <h3>
                     <span class="tx-1"></span>
                     <span class="tx-2"></span>
                  </h3>
                  <span class="tx-3"></span>
               </div>
            </div>
         </li>
      </ul>
   </div>
</template>
<style lang="scss" scoped>
   $bg: rgb((237-170), (240-170), (245-170)); //invert(rgb(237, 240, 245));


   %text {
      background-color: $bg;
      width: 100%;
      height: 1.1rem;
      border-radius: 2.133vw;
      display: block;
   }

   .view-film\.loading {
      position: relative;
      width: 100%;
      overflow: hidden;

      .list {
         margin: 0;
         padding: 0;
         margin-bottom: 25px;
         margin-left: 5px;
         margin-right: 5px;
         box-sizing: border-box;
         position: relative;
         list-style: none;

         .item {
            .film {
               background-color: rgba(11, 15, 21, 0.26);
               line-height: 1.2;
               list-style-type: none;
               margin: 10px 0;
               padding-right: 10px;
               display: flex;
               align-items: center;

               .groups\.poster {
                  width: 132px;
                  height: 97px;
                  background-color: $bg;
                  border-radius: 5px;
                  margin-right: 15px;
               }

               .groups\.info {
                  flex: {
                     basis: 0;
                     grow: 1;
                  }

                  ;

                  h3 {
                     margin-bottom: 5px;
                     margin-left: 0;
                     margin-right: 0;
                     margin-top: 10px;

                     span {
                        @extend %text;
                        margin-bottom: 3px;

                        &.tx-1 {
                           width: 70%;
                        }

                        &.tx-2 {
                           width: 40%;
                        }
                     }
                  }

                  .tx-3 {
                     padding: 0;
                     margin-top: 5px;
                     @extend %text;
                     width: 10vw;
                  }
               }
            }
         }
      }
   }
</style>
<script>
   import BacAnimation from "../components/Bac.animation.vue"
   export default {
      components: { BacAnimation }
   }
</script>