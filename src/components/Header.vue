<template>
   <header class="header">
      <div class="navbar">
         <div class="navbar.header">
            <button class="hambuger" @click="stateCollapse = !stateCollapse">
               <span></span>
               <span></span>
               <span></span>
            </button>
            <button class="search">
               <i class="icon-search fa-sm"></i>
            </button>
         </div>
         <div class="navbar.collapse" :style="{ height: heightCollapse }" :class="{ collapsing }" @transitionend="transitionEnd" ref="Collapse">
            <ul class="list">
               <li class="item">
                  <router-link to="/" class="link"> <i class="fas fa-home"></i> Phim Sex </router-link>
               </li>
               <li class="item">
                  <dropdown href="#" button-class="link" text="Vietsub" @updated="updateHeight">
                     <template #button>
                        <i class="far fa-heart"></i>
                        Vietsub
                     </template>
                     <div class="dropdown-item">
                        <router-link to="/tag/viet-sub-nhat-ban/" class="dropdown-link"> Nhật Bản </router-link>
                     </div>
                     <div class="dropdown-item">
                        <router-link to="/tag/viet-sub-chau-au" class="dropdown-link"> Châu Âu </router-link>
                     </div>
                     <div class="dropdown-item">
                        <router-link to="/type/phim-sex-viet-sub" class="dropdown-link"> Phim Sex Vietsub </router-link>
                     </div>
                  </dropdown>
               </li>
               <li class="item">
                  <router-link to="/type/phim-sex-loan-luan" class="link"> Loạn Luân </router-link>
               </li>
               <li class="item">
                  <router-link to="/type/phim-sex-hiep-dam" class="link"> Hiếp Dâm </router-link>
               </li>
               <li class="item">
                  <router-link to="/type/phim-sex-khong-che" class="link"> Không Che </router-link>
               </li>
               <li class="item">
                  <router-link to="/type/phim-sex-chau-au" class="link"> Châu Âu </router-link>
               </li>
               <li class="item">
                  <router-link to="/type/clip-sex-trung-quoc" class="link"> Sex Trung Quốc </router-link>
               </li>
               <li class="item">
                  <router-link to="/type/phim-sex-hay" class="link"> <i class="far fa-thumbs-up"></i> Phim Sex Hay </router-link>
               </li>
            </ul>
         </div>
      </div>
   </header>
</template>
<style lang="scss" scoped>
   .header {
      background-color: rgba(15, 15, 15, 0.99);
      border-bottom-color: rgb(0, 0, 0);
      border-bottom-style: solid;
      border-bottom-width: 1px;
      box-shadow: rgba(0, 0, 0, 0.4) 0 1px 5px;

      .navbar {
         position: relative;

         .navbar\.header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            position: relative;

            button {
               border-radius: 4px;
               padding: 9px 10px;
               margin: 6px 0;
               position: relative;
               background-color: transparent;
               font-size: 14px;
               color: rgb(224, 224, 224);
               outline: none;

               &:hover {
                  outline: none;
               }
            }

            .hambuger {
               span {
                  border-radius: 1px;
                  display: block;
                  height: 2px;
                  width: 22px;

                  &+span {
                     margin-top: 4px;
                  }

                  background-color: currentColor;
               }
            }

            .search {
               margin: 2px 0;
               padding: 9px;
            }

            @media (min-width: 772px) {
               display: none;
            }
         }

         .navbar\.collapse {
            box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0 inset;
            height: 0;
            position: relative;

            &.collapsing {
               transition: height .5s ease;
            }

            overflow: hidden;

            @media (min-width: 772px) {
               height: auto;
               overflow: visible;
            }

            .list {
               margin: {
                  bottom: 7.5px;
                  top: 7.5px;
                  left: 0;
                  right: 0;
               }

               padding: 0;
               list-style: none;

               @media (min-width: 772px) {

                  display: flex;
                  flex-wrap: wrap;
               }

               .item {
                  position: relative;

                  @media (min-width: 772px) {
                     display: inline-block;
                  }

                  .active.link,
                  .active.link:hover {
                     background-color: rgb(0, 0, 0);
                     color: rgb(255, 255, 255);
                  }

                  .link {
                     padding: 10px;

                     line-height: 20px;
                     font-size: 14px;
                     color: rgb(179, 179, 179);
                     display: block;
                     position: relative;

                     i {
                        height: auto;
                        line-height: 1;
                        margin-top: -0.265em;
                        width: auto;
                        margin-right: 0.25em;
                        font-size: 12px;
                     }
                  }
               }
            }
         }
      }
   }
</style>
<script>
   import Dropdown from "./Dropdown.vue"
   const noop = () => {}
   export default {
      components: { Dropdown },
      data: () => ({
         heightCollapse: undefined,
         stateCollapse: false,
         collapsing: false
      }),
      methods: {
         transitionEnd: noop,
         open() {
            this.$refs.Collapse.offsetHeight
            this.collapsing = true
            this.transitionEnd = () => {
               this.collapsing = false
               this.transitionEnd = noop
            }
            setTimeout(() => this.heightCollapse = this.$refs.Collapse.scrollHeight + "px")

         },
         close() {
            this.collapsing = true
            this.heightCollapse = undefined
            this.transitionEnd = () => {
               this.collapsing = false
               this.transitionEnd = noop
            }
         },
         updateHeight() {
            if (this.stateCollapse) {
               this.heightCollapse = "auto"
               setTimeout(() => this.heightCollapse = this.$refs.Collapse.scrollHeight + "px")
            }
         }
      },
      watch: {
         stateCollapse(val) {
            if (val) {
               this.open()
            } else {
               this.close()
            }
         }
      }
   }
</script>