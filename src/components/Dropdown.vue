<template>
   <div class="dropdown" :is="tag">
      <div class="dropdown-header">
         <slot name="button" />
         <span class="caret"></span>
      </div>
      <div class="dropdown-body">
         <ul>
            <li>
               <a href="#"> Phim sex mới </a>
            </li>
         </ul>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .dropdown {
      .dropdown-header {
         .caret {
            caret {
               border-left-color: transparent;
               border-left-style: solid;
               border-left-width: 4px;
               border-right-color: transparent;
               border-right-style: solid;
               border-right-width: 4px;
               border-top-style: dashed;
               border-top-width: 4px;
               display: inline-block;
               height: 0px;
               margin-left: 2px;
               vertical-align: middle;
               width: 0;
            }
         }
      }

      .dropdown-body {
         background-clip: padding-box;
         background-color: rgb(255, 255, 255);
         border: 1px solid rgba(0, 0, 0, 0.15);
         border-radius: 4px;
         box-shadow: rgba(0, 0, 0, 0.176) 0 6px 12px;
         display: none;
         float: left;
         font-size: 14px;
         left: 0;
         list-style-type: none;
         margin: 2px 0 0 0;
         min-width: 160px;
         padding: 5px 0;
         position: absolute;
         top: 100%;
         z-index: 10000;
         background-color: rgb(40, 40, 40);
         right: 0px;

         li {
            a {
               color: rgb(255, 255, 255);
               padding: 10px 15px;
               white-space: normal;
            }
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
         }
      }
   }
</script>