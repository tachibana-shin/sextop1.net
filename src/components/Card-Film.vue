<template>
   <div class="card-film">
      <router-link :to="data.path" class="groups.poster">
         <div class="poster">
            <img :src="data.poster">
         </div>
         <div class="play-hover">
         </div>
      </router-link>
      <div class="groups.title">
         <h2>
            <router-link :to="data.path"> {{ data.name }} </router-link>
         </h2>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   @mixin text-truncate($count: -1) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;

      @if ($count==-1 or $count==1) {
         white-space: nowrap;
      }

      @if ($count !=-1) {
         -webkit-box-orient: vertical;
         -webkit-line-clamp: $count;
      }
   }

   .card-film {
      margin-bottom: 20px;
      padding: 3px;
      position: relative;
      box-sizing: border-box;

      .groups\.poster {
         position: relative;

         .poster {
            position: relative;
            overflow: hidden;

            img {
               display: block;
               height: auto;
               width: 100%;
               transition: transform .3s ease-in-out;
            }
         }

         .play-hover {
            background: {
               color: rgb(0, 0, 0);
               image: url("https://sextop1.pro/wp-content/themes/top1tube/assets/images/play-icon.png");
               position: center;
               repeat: no-repeat;
               size: 30px;
            }

            ;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity .5s ease-in-out;
            z-index: 2;
         }

         &:hover {
            .poster img {
               transform: scale(1.2);
            }

            .play-hover {
               opacity: .75;
            }
         }

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
            @include text-truncate(2);

            a {
               color: rgb(219, 219, 219);
               font-family: "Open Sans", sans-serif;
               font-size: 13px;

               &:hover {
                  color: #d33;
               }
            }
         }
      }
   }
</style>
<script>
   export default {
      props: {
         data: Object
      }
   }
</script>