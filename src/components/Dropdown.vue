<template>
   <div class="dropdown" :is="tag">
      <div class="dropdown-header" @click.stop="active = !active">
         <a :href="href" :class="buttonClass" @click.prevent>
            <slot name="button" v-if="$slots.button" />
            <span v-else> {{ text }} </span>
            <span class="caret"></span>
         </a>
      </div>
      <div class="dropdown-menu" :class="{ active }" @click.stop>
         <slot name="default" />
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .dropdown {
      position: relative;

      .dropdown-header {
         position: relative;

         .caret {
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top-width: 4px;
            border-top-style: dashed;
            border-top-color: currentColor;
            border-bottom-color: currentColor;
            display: inline-block;
            height: 0;
            width: 0;
            margin-left: 2px;
            vertical-align: middle;
         }
      }

      .dropdown-menu {
         border: 1px solid rgba(0, 0, 0, 0.15);
         border-radius: 4px;
         box-shadow: rgba(0, 0, 0, 0.176) 0 6px 12px;
         display: none;
         font-size: 14px;
         left: 0;
         list-style-type: none;
         margin: 2px 0 0 0;
         min-width: 160px;
         padding: 5px 0;
         top: 100%;
         z-index: 10000;
         background-color: rgb(40, 40, 40);
         right: 0px;

         @media (min-width: 772px) {
            position: absolute;
            box-shadow: none;
         }

         &.active {
            display: block;
         }

         &:before {
            content: "";
            border-left: .4rem solid transparent;
            border-right: .4rem solid transparent;
            border-bottom-width: .4rem;
            border-bottom-style: dashed;
            border-bottom-color: currentBackgroundColor;
            border-bottom-color: currentBackgroundColor;
            height: 0;
            width: 0;
            position: absolute;
            top: -.4rem;
            left: 1.5rem;
            display: none;

            @media (min-width: 772px) {
               display: block;
            }
         }

         &>>>.dropdown-item {
            .dropdown-link {
               display: block;
               line-height: 1.42857;
               color: rgb(255, 255, 255);
               padding: 10px 15px;
               white-space: normal;

               &:hover {
                  background-color: rgb(30, 30, 30);
               }
            }

            a.active,
            a.active:hover {
               background-color: rgb(51, 122, 183);
               color: rgb(255, 255, 255);
            }
         }
      }

      @media (min-width: 772px) {
         &:hover>.dropdown-menu {
            display: block !important;
         }
      }
   }
</style>
<script>
   export default {
      props: {
         tag: {
            type: String,
            default: "div"
         },
         href: {
            type: String,
            default: "#"
         },
         buttonClass: {
            type: [String, Object, Array]
         },
         text: String
      },
      data: () => ({
         active: false
      }),
      watch: {
         active() {
            this.$emit("updated")
         }
      },
      created() {
         document.addEventListener("click", this.onClick = () => this.active = false)
      },
      beforeDestroy() {
         document.removeEventListener("click", this.onClick)
      }
   }
</script>
