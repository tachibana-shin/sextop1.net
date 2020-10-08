<template>
   <div class="wrapper">
      <div class="notice" v-if="renderNotice">
         <img class="notice.icon" src="/src/assets/home.ic.anotice.svg">
         <div class="notice.content">
            <p> Nếu không </p>
         </div>
         <img class="notice.close" src="/src/assets/home.ic.close.svg" @click="renderNotice = false">
      </div>
      <div class="content" v-if="data">
         <panel-label class="title">
            {{ data.name }}
         </panel-label>
         <ul class="list">
            <li class="item" v-for="item in data.items">
               <card-film :data="item" />
            </li>
         </ul>
         <vue-infinite @infinite="fetchData">
            <div slot="spinner">
               <list-film-loading :title="false" :length="8" />
            </div>
            <div slot="error" slot-scope="{ trigger }">
               Error message, click <a href="#" @click.prevent="trigger">here</a> to retry
            </div>
         </vue-infinite>
      </div>
      <list-film-loading v-else />
   </div>
</template>
<style lang="scss" scoped>
   $white: #000;
   $color-text-content: invert(rgb(47, 64, 89));
   $color-blue-grey: invert(rgb(162, 171, 191));
   $color-yellow-grey: invert(rgb(240, 242, 245));
   $color-blue-dark: rgb(217, 217, 217); //invert(rgb(55, 77, 115));
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
   $color-main: rgb(0, 132, 240);

   .wrapper {
      background-color: rgba(15, 15, 15, .93);

      .notice {
         background-color: $bg-wrapper;
         height: (8.533rem * 3.6 / 16);
         position: relative;
         top: 0;
         left: 0;
         z-index: 5;
         display: flex;
         align-self: center;
         justify-content: space-between;

         .notice\.icon {
            margin-left: (5.333rem * 3.6 / 16);
         }

         .notice\.content {
            flex: {
               basis: 0;
               grow: 1;
               shrink: 1;
            }

            margin: {
               left: ((12.8rem - 5.333) * 3.6 / 16);
               right: ((12.8rem - 5.333) * 3.6 / 16);
            }

            ;
            overflow: hidden;
            display: flex;
            align-items: center;
            position: relative;

            p {
               margin: 0;
               padding: 0;
               color: $color-main;
               display: inline-block;
               min-width: 100%;
               font-size: (3.2rem * 3.6 / 16);
               font-weight: 400;
               white-space: nowrap;
               animation: text-run 10s linear infinite;

               @keyframes text-run {
                  from {
                     transform: translateX(100%);
                  }

                  to {
                     transform: translateX(-100%);
                  }
               }
            }
         }

         .notice\.close {
            margin-right: ((5.333rem * 3.6) / 16);
            margin-left: auto;
         }
      }

      .content {
         position: relative;
         box-sizing: border-box;
         .title {
            margin-top: 0;
         }
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
      
      .notice ~ .content .title {
         margin-top: 15px;
      }
   }
</style>
<script>
   import CardFilm from "../components/Card-Film.vue"
   import PanelLabel from "../components/Panel-Label.vue"
   import ListFilmLoading from "../components/List-Film.Loading.vue"
   import VueInfinite from "vue-infinite-loading"

   export default {
      components: { CardFilm, PanelLabel, ListFilmLoading, VueInfinite },
      data: () => ({
         data: null,
         renderNotice: true,
         page: null
      }),
      methods: {
         fetchData({ loaded, complete } = {}, updatePage = false) {
            const { tag, type } = this.$route.params
            const { page } = this

            let url = "http://localhost:3000/api/home"

            if (tag) {
               url += "/tag/" + tag
            } else if (type) {
               url += "/type/" + type
            }

            if (page) {
               url += "/page/" + page
            }

            this.$axios.get(url)
               .then(res => res.data)
               .then(({ state, data }) => {
                  if (state.error) {
                     throw new Error(state.message)
                  }
                  if (updatePage) {
                     this.data = data
                  } else {
                     this.data.items.push(...data.items)
                  }

                  this.page = (page || 1) + 1

                  if (data.items.length) {
                     loaded && loaded()
                  } else {
                     complete && complete()
                  }
               })

         }
      },
      watch: {
         "$route": {
            handler() {
               this.data = null
               this.page = null
               this.fetchData({}, true)
            },
            immediate: true
         }
      }
   }
</script>