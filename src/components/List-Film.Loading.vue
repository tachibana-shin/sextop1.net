<template>
   <div class="loading">
      <bac-animation v-if="!noBac" />
      <panel-label-loading v-if="title" />
      <ul class="list">
         <li class="item" v-for="item in length">
            <card-film-loading />
         </li>
      </ul>
   </div>
</template>
<style lang="scss" scoped>
   .loading {
      position: relative;
      overflow: hidden;

      .list {
         margin: 0;
         padding: 0;
         list-style: none;
         display: flex;
         flex-wrap: wrap;

         .item {
            flex: 0 0 50%;

            @media (min-width: 772px) {
               & {
                  flex: 0 0 (100% / 4);
               }
            }
         }
      }

   }
</style>
<script>
   import BacAnimation from "./Bac.animation.vue"
   import PanelLabelLoading from "./Panel-Label.Loading.vue"
   import CardFilmLoading from "./Card-Film.Loading.vue"

   export default {
      props: {
         title: {
            type: Boolean,
            default: true
         },
         noBac: Boolean,
         length: {
            type: Number,
            default: 20
         }
      },
      components: { BacAnimation, PanelLabelLoading, CardFilmLoading }
   }
</script>