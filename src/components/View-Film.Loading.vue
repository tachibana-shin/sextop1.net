<template>
   <div class="view-film.loading">
      <bac-animation />
      <div class="col-6 wrapper">
         <div class="header">
            <span class="tx-1"></span>
            <span class="tx-2"></span>
         </div>
         <div class="main">
            <div class="video-wrapper">
               <iframe></iframe>
            </div>
            <div class="infomation">
               <ul class="list">
                  <li>
                     <div class="key">
                        <span class="tx-2"></span>
                     </div>
                     <div class="value">
                        <div>
                           <span v-for="i in 5"></span>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div class="key">
                        <span></span>
                     </div>
                     <div class="value">
                        <div>
                           <span v-for="i in 3"></span>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <list-film-loading class="relate-movies" no-bac :length="8"/>
      </div>
      <div class="col-6 good-film">
         <panel-label-loading />
         <ul class="list">
            <li class="item" v-for="item in 6">
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
      background-color: rgba(15, 15, 15, 0.93);
      padding-bottom: 15px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 100%;
      overflow: hidden;
      max-height: 250vw;

      .col-6 {
         flex: 0 0 100%;

         @media (min-width: 991.89px) {
            & {
               flex: 0 0 50%;
               margin-top: 0;
            }
         }
      }

      .wrapper {

         .header {
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 10px;

            span {
               font-size: 14px;
               margin: 0 5px;
               width: (360px / 2);
               margin-bottom: 3px;

               @extend %text;

               height: 1.5em;
               border-radius: 1em;

               &.tx-2 {
                  width: (360px * .4);
               }
            }

         }

         .main {
            margin-top: 15px;

            .video-wrapper {
               width: 100%;
               background-color: $bg;
               border-radius: 5px;

               height: 0;
               overflow: hidden;
               padding-bottom: 56.25%;
               position: relative;

               iframe {
                  height: 100%;
                  left: 0;
                  position: absolute;
                  top: 0;
                  width: 100%;
                  border: 0;
               }

               &::before {
                  display: block;
                  content: "";
                  padding-top: 42.857143%;
               }
            }

            .infomation {
               font-size: 13px;
               margin: 10px;

               .list {
                  margin: 0;
                  padding: 0;
                  list-style: none;

                  li {
                     span {
                        margin: {
                           top: .3rem;
                           left: .3rem;
                        }
                     }

                     .key {
                        margin-right: .3rem;

                        margin: {
                           top: calc(5px + .5rem);
                           bottom: 5px;
                        }

                        span {
                           @extend %text;
                           width: (360px * .2);
                           display: inline-block;

                           &.tx-2 {
                              width: (360px * .3);
                           }
                        }

                     }


                     .value {

                        flex: 0 0 1;

                        div {
                           margin: {
                              top: 5px;
                              bottom: 5px;
                           }

                           span {

                              @extend %text;
                              width: (360px * .3);

                              display: inline-block;
                           }
                        }
                     }
                  }

               }

            }

         }

         .relate-movies {
            margin-top: 15px;
         }
      }

      .good-film {
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
                              width: (360px * .7);
                           }

                           &.tx-2 {
                              width: (360px * .4);
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
   }
</style>
<script>
   import PanelLabelLoading from "../components/Panel-Label.Loading.vue"
   import ListFilmLoading from "../components/List-Film.Loading.vue"
   import BacAnimation from "../components/Bac.animation.vue"
   export default {
      components: { PanelLabelLoading, ListFilmLoading, BacAnimation }
   }
</script>