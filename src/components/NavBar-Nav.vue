<template>
   <div class="nav.list-wrapper" :class="{ active: state }">
      <nav class="nav.list" @touchmove.prevent>
         <div class="content" v-touch-scroll:vertical="{ scrollbar: { render: false } }">
            <ul class="list" @click="$emit('hide-menu')">
               <li class="item">
                  <span> Phim sex </span>
               </li>
               <li class="item">
                  <span> Việt sub </span>
               </li>
               <li class="item">
                  <span> Loạn luân </span>
               </li>
               <li class="item">
                  <span> Hiếp dâm </span>
               </li>
               <li class="item">
                  <span> Không che </span>
               </li>
               <li class="item">
                  <span> Châu âu </span>
               </li>
               <li class="item">
                  <span> Sex trung quốc </span>
               </li>
               <li class="item">
                  <span> Phim sex hay </span>
               </li>
               <li class="item">
                  <span> Idol </span>
               </li>
            </ul>
         </div>
      </nav>
      <div class="space" @click="$emit('hide-menu')"></div>
   </div>
</template>
<style lang="scss" scoped>
   $white: #000;
   $color-text-content: invert(rgb(47, 64, 89));
   $color-blue-grey: invert(rgb(162, 171, 191));
   $color-yellow-grey: invert(rgb(240, 242, 245));
   $color-blue-dark: rgb(217, 217, 217);//invert(rgb(55, 77, 115));
   $color-blue-black: invert(rgb(0, 87, 158));
   $color-FAQ: invert(rgb(48, 49, 51));
   $color-hr: invert(rgb(242, 244, 245));
   
   $bg-wrapper: invert(rgb(245, 246, 247));
   $bg-header_tabs: invert(rgb(252, 253, 255));
   $bg-active: invert(rgb(238, 242, 250));
   $bg-popup: invert(rgb(249, 250, 252));
   
   $color-title-app: invert(rgb(117, 136, 169));
   $color-app-name-pro: invert(rgb(22, 43, 72));
   $border-color-end: invert(rgb(217, 217, 217));

   .nav\.list-wrapper {
      position: fixed;
      z-index: 9999;
      width: 100%;
      height: 100%;
      transition: all .666s ease;
      display: flex;
      transform: translateX(-100%);
      top: 0;
      left: 0;

      &.active {
         transform: translateX(0%);
      }

      hr {
         margin: 0;
         padding: 0;
      }

      .nav\.list {
         background-color: $white;
         width: 79.467vw;
         height: 100%;
         position: absolute;
         overflow: hidden;

         &::-webkit-scrollbar {
            display: none;
         }

         -ms-overflow-style: none;
         scrollbar-width: none;

         .content {
            border: 1px solid $white;
            background-color: $white;
            padding-bottom: 26.667vw;

            hr.line {
               background-color: $color-hr;
               height: 1px;
               width: 100%;
            }

            .list {
               /*padding: 3.2vw 5.333vw;*/
               padding: 5.333vw;
               box-sizing: border-box;
               margin: 0;
               list-style: none;

               .item {
                  border-radius: 2.133vw;
                  display: flex;
                  align-items: center;

                  font: {
                     size: 4.267vmin;
                     weight: 500;
                  }

                  ;
                  color: $color-blue-dark;
                  height: 13.867vw;
                  box-sizing: border-box;

                  .icon {
                     width: 7.467vw;
                     height: 7.467vw;
                     margin-right: 4.267vw;
                  }

                  &.active {
                     background-color: $bg-active;
                  }
               }

               hr {
                  background-color: $color-hr;
                  height: 1px;
                  margin: 3.2vw 0;
               }

               .contact {
                  color: $color-title-app;

                  font: {
                     size: 3.733vw;
                     weight: 500;
                  }

                  line-height: 4.8vw;
                  margin-left: 17.067vw;

                  ul {
                     margin: 0;
                     padding: 0;
                     list-style: none;

                     .item-contact {
                        margin-top: 3.2vw;

                        a {
                           text-decoration: none;
                           color: $color-title-app;

                           font: {
                              size: 3.733vmin;
                              weight: 500;
                           }

                           ;
                           line-height: 4.8vw
                        }
                     }
                  }
               }

               hr {
                  background-color: $color-hr;
                  height: 1px;
               }
            }
         }

      }

      .space {
         flex: {
            basis: 0;
            grow: 1;
            shrink: 1;
            /* get max column height */
         }

         ;
      }
   }
</style>
<script>
   export default {
      props: {
         state: Boolean
      }
   }
</script>