<template>
   <header class="header">
      <div class="col-12 col-md-6 order-md-0 logo">
         <img :src="require('@/assets/logo.png')">
      </div>
      <div class="col-12 order-md-2 navbar">
         <div class="navbar.header">
            <button class="hambuger" @click="stateCollapse = !stateCollapse">
               <span></span>
               <span></span>
               <span></span>
            </button>
            <button class="search-icon">
               <i class="fas fa-search" @click="stateSearch = !stateSearch"></i>
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
      <div class="col-12 col-md-6 orfer-md-1 wrapper-search" :style="{ height: heightSearch }" ref="Search">
         <div class="search">
            <button class="prepend">
               <i class="fas fa-search"></i>
            </button>
            <input placeholder="Nhập từ khóa" />
            <button class="append">
               Tìm kiếm
            </button>
         </div>
      </div>
   </header>
</template>
<style lang="scss" scoped>
   .header {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      background-color: rgba(31, 31, 31, 0.99);
      border-bottom-color: rgb(0, 0, 0);
      border-bottom-style: solid;
      border-bottom-width: 1px;
      box-shadow: rgba(0, 0, 0, 0.4) 0 1px 5px;

      @media (min-width: 772px) {
         background-color: rgba(15, 15, 15, 0.99);
      }

      .col-12 {
         flex: 0 0 100%;
      }

      @media (min-width: 772px) {
         .col-md-6 {
            flex: 0 0 50%;
         }

         @for $i from 0 to 3 {
            .order-md-#{$i} {
               order: $i;
            }
         }
      }

      .logo {
         text-align: center;
         position: relative;
         vertical-align: middle;
         background-color: rgba(15, 15, 15, .93);
         padding: {
            top: .3rem;
            bottom: .3rem;
         };
         @media (min-width: 772px) {
            text-align: left;
            display: flex;
            align-items: center;
         }
         img {
            height: auto;
         }
      }

      .navbar {

         .navbar\.header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            position: relative;

            button {
               padding: 9px 10px;
               margin: 6px 0;
               position: relative;
               background-color: transparent;
               font-size: 14px;
               color: rgb(224, 224, 224);
               outline: none !important;
               border: 0 !important;

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

            .search-icon {
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

                  & >>> .active.link,
                  & >>> .active.link:hover {
                     background-color: rgb(0, 0, 0);
                     color: rgb(255, 255, 255);
                  }

                  & >>> .link {
                     padding: 10px;

                     @media (min-width: 772px) {
                        padding: 15px;
                     }

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

      .wrapper-search {
         height: 0;
         overflow: hidden;
         transition: height .5s ease;

         @media (min-width: 772px) {
            overflow: visible;
            height: auto;
         }

         .search {
            box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0 inset;
            @media (min-width: 772px) {
               box-shadow: none;
            }
            margin: 5px;
            padding-top: 10px;
            padding-bottom: 5px;
            display: flex;
            position: relative;

            @media (min-width: 772px) {
               padding-bottom: 15px;
            }

            input {
               box-shadow: rgba(0, 0, 0, 0.075) 0 1px 1px inset;
               color: rgb(85, 85, 85);
               display: inline-block;
               font-size: 14px;
               height: 34px;
               line-height: 1.42857;
               padding: 6px 12px;
               width: 100%;
               background-color: rgb(9, 11, 12);
               border: 1px solid rgba(255, 255, 255, 0.08);
               box-shadow: none;
               color: rgb(255, 255, 255);
               font-size: 13px;
               padding: 10px 4px;

               flex: {
                  basis: 0;
                  grow: 1;
                  shrink: 1;
               }

               border: 1px solid rgba(255, 255, 255, 0.08);
               border-right: 0;
               border-radius: 3px;
               border-top-right-radius: 0;
               border-bottom-right-radius: 0;

               @media (min-width: 772px) {
                  border-left: 0;
                  border-top-left-radius: 0;
                  border-top-left-radius: 0;
               }
            }

            button {
               border-radius: 4px;
               cursor: pointer;
               display: inline-block;
               font-size: 14px;
               font-weight: normal;
               line-height: 1.42857;
               margin-bottom: 0;
               padding: 6px 12px;
               text-align: center;
               touch-action: manipulation;
               user-select: none;
               vertical-align: middle;
               white-space: nowrap;
               background-color: rgb(25, 25, 25);
               border: 1px solid rgba(255, 255, 255, 0.08);
               color: rgb(165, 165, 165);

               &:hover {
                  background-color: rgb(217, 83, 79);
                  border-bottom-color: rgb(212, 63, 58);
                  border-left-color: rgb(212, 63, 58);
                  border-right-color: rgb(212, 63, 58);
                  border-top-color: rgb(212, 63, 58);
                  color: rgb(255, 255, 255);
               }
            }

            .prepend {
               background-color: rgb(9, 11, 12);
               margin: 0;
               border-right: 0;
               border-top-right-radius: 0;
               border-bottom-right-radius: 0;
               display: none;

               @media (min-width: 772px) {
                  display: inline-block;
               }
            }

            .append {
               border-top-left-radius: 0;
               border-bottom-left-radius: 0;
               border-left: 0;
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
         collapsing: false,

         heightSearch: undefined,
         stateSearch: false
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
         },
         stateSearch(val) {
            if (val) {
               this.$refs.Search.offsetHeight
               this.heightSearch = this.$refs.Search.scrollHeight + "px"
            } else {
               this.heightSearch = undefined
            }
         }
      }
   }
</script>