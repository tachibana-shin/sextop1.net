<template>
   <div class="wrapper">
      <div class="notice">
         <img class="notice.icon" src="/src/assets/home.ic.anotice.svg">
         <div class="notice.content">
            <p> Nếu không </p>
         </div>
         <img class="notice.close" src="/src/assets/home.ic.close.svg">
      </div>
      <div class="content">
         <panel-label>
            {{ Film.name }}
         </panel-label>
         <ul class="list">
            <li class="item" v-for="item in Films.items">
               <card-film :data="item" />
            </li>
         </ul>
      </div>
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
         height: 8.533vw;
         position: relative;
         top: 0;
         left: 0;
         z-index: 5;
         display: flex;
         align-self: center;
         justify-content: space-between;

         .notice\.icon {
            margin-left: 5.333vw;
         }

         .notice\.content {
            flex: {
               basis: 0;
               grow: 1;
               shrink: 1;
            }

            margin: {
               left: (12.8vw - 5.333);
               right: (12.8vw - 5.333);
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
               font-size: 3.2vmin;
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
            margin-right: 5.333vw;
            margin-left: auto;
         }
      }

      .content {
         .label {
            background-color: rgb(10, 10, 10);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: rgb(255, 255, 255);
            font-size: 13px;
            font-weight: normal;
            padding-bottom: 7px;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 10px;
            text-transform: uppercase;
         }

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
</style>
<script>
   import CardFilm from "../components/Card-Film.vue"
   import PanelLabel from "../components/Panel-Label.vue"
   export default {
      components: { CardFilm, PanelLabel },
      data: () => ({
         Films: []
      }),
      methods: {
         fetch() {
            const { tag, type, page } = this.$route.params

            let url = "http://localhost:3000/api/home"

            if (tag) {
               url += "/tag/" + tag
            } else if (type) {
               url += "/type/" + type
            }

            if (page) {
               url += "/page" + page
            }

            this.$axios.get(url)
               .then(res => res.data)
               .then(({ state, data }) => {
                  if (state.error) {
                     throw new Error(state.message)
                  }
                  //this.Films = data
               })
         }
      },
      created() {
         this.fetch()
      }
   }
</script>