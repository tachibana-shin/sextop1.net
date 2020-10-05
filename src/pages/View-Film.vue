<template>
   <div class="view-film">
      <div class="col-6 wrapper">
         <div class="header">
            <h1> Con gái ngại ngùng chuyện ấy với bạn trai được mẹ giúp đỡ </h1>
         </div>
         <div class="main">
            <div class="video-wrapper">
               <iframe allowfullscreen="true" width="100%" src="https://stream123.xyz/v/5f713e3301617"></iframe>
            </div>
            <div class="infomation">
               <div class="item">
                  <span> Tags: </span>
                  <a> Bố chồng nàng dâu </a>
               </div>
               <div class="item">
                  <span> Thể loại: </span>
                  <a> Bố chồng nàng dâu </a>
               </div>
            </div>
            <div class="description">
               <p class="content" :style="{ height: heightDes }" ref="des.Content" :class="{ active: heightActive }">
                  Adira Allure đang lo lắng cho cô con gái riêng của mình, Kate Bloom. Kate có một người bạn trai tốt, Seth Gamble, nhưng cả hai quá nhút nhát với nhau. Adira lo lắng rằng họ có thể chia tay, điều này có thể khiến Kate cuối cùng hòa vào đám đông sai lầm. Quyết định tự mình giải quyết vấn đề, Adira tiến vào phòng khách và bắt đầu ra lệnh. Soon Seth đặt tay lên ngực Kate, trong khi Kate xoa bóp con cu của Seth. Adira thấy rằng cô ấy thích xem con gái riêng của mình và bạn trai của cô ấy chơi tình dục đầu tiên của họ. Đưa tay lên và chộp lấy bộ ngực của mình, cô ấy bắt đầu tự chà xát quần áo của mình.
               </p>
               <span class="more" @click="heightActive = !heightActive">
                  {{ heightActive ? "Thu gọn" : "Xem thêm" }} </span>
            </div>
            <!--
            <ul class="remind-group">
               <li>
                  <p class="remind">
                     ☆ Bạn có thể truy cập SEXTOP1 bằng SEXTOP1.PRO hoặc SEXTOP1.TUBE.
                  </p>
               </li>
               <li>
                  <p class="remind">
                     ☆ Bạn có thể truy cập SEXTOP1 bằng SEXTOP1.PRO hoặc SEXTOP1.TUBE.
                  </p>
               </li>
               <li>
                  <p class="remind">
                     ☆ Bạn có thể truy cập SEXTOP1 bằng SEXTOP1.PRO hoặc SEXTOP1.TUBE.
                  </p>
               </li>
            </ul>-->
         </div>
         <div class="relate-movies">
            <panel-label :items="[]"> Sextop1 đề xuất </panel-label>
            <ul class="list">
               <li class="item" v-for="i in 6">
                  <card-film />
               </li>
            </ul>
         </div>
      </div>
      <div class="col-6 good-film">
         <panel-label :items="[ 'Ngày', 'Tháng', 'Năm' ]"> Phim sex hay </panel-label>
         <ul class="list">
            <li class="item" v-for="i in 20">
               <div class="film">
                  <div class="groups.poster">
                     <div class="poster">
                        <img src="https://sextop1.pro/images/2020/10/con-gai-ngai-ngung-chuyen-ay-voi-ban-trai-duoc-me-giup-do-410x300.jpg">
                     </div>
                     <div class="play-hover">
                     </div>
                  </div>
                  <div class="groups.info">
                     <h3> Bài hoc tinh duc cúa bõ cho đúa con riêng dâm đang</h3>
                     <p> 49, 000 view </p>
                  </div>
               </div>
            </li>
         </ul>
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

   .view-film {
      background-color: rgba(15, 15, 15, 0.93);
      padding-bottom: 15px;
      display: flex;
      .col-6 {
         flex: 0 0 100%;
         @media (min-width: 991.89px) {
            & {
               flex: 0 0 50%;
            }
         }
      }

      .wrapper {

         .header {
            border: 1px solid rgba(255, 255, 255, 0.08);

            h1 {
               color: rgb(148, 148, 148);
               font-size: 14px;
               font-weight: 700;
               line-height: 20px;
               margin: 0 5px;
               padding: 10px;
            }
         }

         .main {
            margin-top: 15px;

            .video-wrapper {
               height: 0px;
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
            }

            .infomation {
               font-size: 13px;
               margin: 10px;

               .item {
                  display: flex;

                  margin: {
                     top: 5px;
                     bottom: 5px;
                  }

                  ;

                  span {
                     color: rgb(152, 152, 152);
                     margin-right: .3rem;
                  }

                  a {
                     color: #0d6efd;
                  }
               }
            }

            .remind-group {
               margin: 0 0 10px 0;
               padding: 0;
               list-style: decimal;

               li {
                  margin: 0;
                  padding: 0;
                  margin-left: 3px;

                  p {
                     background-color: rgb(18, 23, 27);
                     border-radius: 2px;
                     font-size: 13px;
                     line-height: 1.5em;
                     margin: 5px;
                     padding: 5px 0;
                     color: rgb(152, 152, 152);
                  }
               }
            }

            .description {
               background-color: rgba(41, 41, 41, 0);
               border: 1px solid rgba(255, 255, 255, 0.08);
               font-size: 14px;
               margin: 10px 0;
               padding: 10px;
               color: rgb(152, 152, 152);

               .content {
                  font-size: 13px;
                  line-height: 1.5;
                  padding: 10px 0 0 0;
                  margin: 0;
                  width: 100%;
                  height: 90px;
                  transition: height .3s ease;
                  display: -webkit-box;
                  -webkit-line-clamp: 4;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;

                  &.active {
                     text-overflow: initial;
                     display: block;
                     -webkit-line-clamp: initial;
                     -webkit-box-orient: initial;
                  }
               }

               .more {
                  color: rgb(100, 100, 100);
                  font-size: 12px;
               }

            }
         }

         .relate-movies {
            margin-top: 15px;

            .list {
               margin: 0;
               padding: 0;
               list-style: none;
               display: flex;
               flex-wrap: wrap;

               .item {
                  flex: 0 0 50%;
               }
            }
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
                     position: relative;
                     margin-right: 15px;

                     .poster {
                        position: relative;
                        overflow: hidden;

                        img {
                           display: block;
                           height: 96px;
                           width: auto;
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

                  .groups\.info {
                     flex: {
                        basis: 0;
                        grow: 1;
                     }

                     ;

                     h3 {
                        color: rgb(219, 219, 219);
                        font-size: 13px;
                        font-weight: 700;
                        line-height: 20px;
                        margin-bottom: 5px;
                        margin-left: 0;
                        margin-right: 0;
                        margin-top: 10px;
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

                     p {
                        padding: 0;
                        font-size: 12px;
                        margin-top: 5px;
                        color: rgb(152, 152, 152);
                     }
                  }
               }
            }
         }
      }
   }
</style>
<script>
   import PanelLabel from "../components/Panel-Label.vue"
   import CardFilm from "../components/Card-Film.vue"
   export default {
      components: { PanelLabel, CardFilm },
      data: () => ({
         heightDes: null,
         heightActive: false
      }),
      watch: {
         heightActive(val) {
            if (val) {
               setTimeout(() => this.heightDes = this.$refs["des.Content"].scrollHeight + "px")
            } else {
               this.heightDes = null
            }
         }
      }
   }
</script>