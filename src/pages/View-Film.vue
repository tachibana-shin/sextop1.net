<template>
   <div class="view-film">
      <div class="col-6 wrapper" v-if="data">
         <div class="header">
            <h1> {{ data.name }} </h1>
         </div>
         <div class="main">
            <div class="video-wrapper">
               <iframe allowfullscreen="true" width="100%" :src="data.stream"></iframe>
            </div>
            <div class="infomation">
               <ul class="list">
                  <li>
                     <div class="key">
                        Tags:
                     </div>
                     <div class="value">
                        <router-link v-for="(item, index) in data.tags" :key="index" :to="'/' + item.path" class="keyword"> {{ item.text }} </router-link>
                     </div>
                  </li>
                  <li>
                     <div class="key">
                        Thể loại:
                     </div>
                     <div class="value">
                        <router-link v-for="(item, index) in data.categorys" :key="index" :to="'/type/' + item.path" class="keyword"> {{ item.text }} </router-link>
                     </div>
                  </li>
               </ul>
            </div>
            <div class="description">
               <p class="content" :style="{ height: heightDes }" ref="des.Content" :class="{ active: heightActive }"> {{ data.description }} </p>
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
               <li class="item" v-for="item in data.dpThumb">
                  <card-film :data="item" />
               </li>
            </ul>
         </div>
      </div>
      <div class="col-6 good-film" v-if="data">
         <panel-label :items="[ { value: 'day', text: 'Ngày' }, { value: 'month', text: 'Tháng' }, { value: 'year', text: 'Năm' } ]" v-model="newSexType"> Phim sex hay </panel-label>
         <ul class="list" v-if="newSex">
            <li class="item" v-for="item in newSex">
               <div class="film">
                  <div class="groups.poster">
                     <div class="poster">
                        <img :src="item.poster">
                     </div>
                     <div class="play-hover">
                     </div>
                  </div>
                  <div class="groups.info">
                     <h3>
                        <router-link :to="'/xem-phim' + item.path"> {{ item.name }} </router-link>
                     </h3>
                     <p> {{ item.view }} view </p>
                  </div>
               </div>
            </li>
         </ul>
         <list-new-sex-loading v-else />
      </div>
      <loading v-else/>
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
      flex-wrap: wrap;
      position: relative;
      box-sizing: border-box;

      .col-6 {
         flex: 0 0 100%;
         position: relative;

         @media (min-width: 991px) {
            flex: 0 0 50%;
            margin-top: 0;
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
               height: 0;
               overflow: hidden;
               padding-bottom: 56.25%;
               position: relative;
               width: 100%;

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
               display: flex;

               .list {
                  margin: 0;
                  padding: 0;
                  list-style: none;

                  li {
                     .key {
                        color: rgb(152, 152, 152);
                        margin-right: .3rem;

                        margin: {
                           top: calc(5px + .5rem);
                           bottom: 5px;
                        }

                        display: block;
                     }


                     .value {

                        flex: 0 0 1;

                        div a {
                           color: #eee //#0d6efd;
                        }

                        div {
                           margin: {
                              top: 5px;
                              bottom: 5px;
                           }

                        }

                     }
                  }

                  .keyword {
                     background-color: rgb((237-170), (240-170), (245-170));
                     border-radius: 15px;
                     display: inline-block;
                     padding: .3rem 5.333vw;

                     margin: {
                        top: .5rem;
                        left: .5rem;
                     }

                     ;
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

                  @media (min-width: 772px) {
                     & {
                        flex: 0 0 (100% / 4);
                     }
                  }
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
                           image: url("~/assets/play-icon.png");
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
   import Loading from "../components/View-Film.Loading.vue"
   import ListNewSexLoading from "../components/ListNewSex.Loading.vue"
   export default {
      components: { PanelLabel, CardFilm, Loading, ListNewSexLoading },
      data: () => ({
         heightDes: null,
         heightActive: false,

         newSexType: "day",
         newSex: null,
         data: null
      }),
      methods: {
         fetchNewSex() {
            this.newSex = null
            this.$axios.get(`http://localhost:3000/api/post/${this.data.idPost}/${this.newSexType}`)
               .then(res => res.data)
               .then(({ state, data }) => {
                  if (state.error) {
                     throw new Error(state.message)
                  }

                  this.newSex = data
               })
         }
      },
      watch: {
         heightActive(val) {
            if (val) {
               setTimeout(() => this.heightDes = this.$refs["des.Content"].scrollHeight + "px")
            } else {
               this.heightDes = null
            }
         },
         "$route": {
            handler() {
               this.data = null
               this.$axios.get(`http://localhost:3000/api/film/${this.$route.params.name}`)
                  .then(res => res.data)
                  .then(({ state, data }) => {
                     if (state.error) {
                        throw new Error(state.message)
                     }

                     this.data = data
                  })
                  .then(() => this.fetchNewSex())
            },
            immediate: true
         },
         newSexType(value) {
            this.fetchNewSex()
         }
      }
   }
</script>
