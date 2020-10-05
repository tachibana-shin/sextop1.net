<template>
   <h3 class="panel-label">
      <span class="slot-default">
         <slot name="default" />
      </span>
      <ul v-if="items.length" class="tabs">
         <li v-for="item in items" class="item">
            <a href="#"> {{ item }} </a>
         </li>
      </ul>
   </h3>
</template>
<style lang="scss" scoped>
   .panel-label {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(10, 10, 10);

      margin: {
         top: 15px;
         bottom: 15px;
      }

      ;

      &:before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         bottom: 0;
         margin: auto;
         width: 100%;
         height: 1px;
         background-color: rgba(255, 255, 255, .3);
      }

      .slot-default {
         /*border: 1px solid rgba(255, 255, 255, 0.08);*/
         background-color: inherit;
         color: rgb(255, 255, 255);
         font-size: 13px;
         font-weight: normal;
         padding-bottom: 7px;
         padding-left: 15px;
         padding-right: 15px;
         padding-top: 10px;
         text-transform: uppercase;
         z-index: 2;
      }

      .tabs {
         margin: 0;
         padding: 0;
         list-style: none;
         display: flex;
         align-items: center;
         z-index: 2;

         .item {
            background-color: rgb(10, 10, 10);
            list-style-type: none;
            margin: 0;
            padding: 4px 8px;
            display: inline-block;

            a {
               color: rgb(152, 152, 152);

               &:hover {
                  color: #dff;
               }
            }

            &.active {
               background-color: rgb(39, 39, 39);
               border: 1px solid rgb(37, 37, 37);
            }
         }
      }
   }
</style>
<script>
   export default {
      props: {
         items: {
            type: Array,
            default: () => [],
            required: false
         }
      }
   }
</script>