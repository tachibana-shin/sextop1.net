<template>
   <header class="header">
      <div class="navbar">
         <div class="navbar.header">
            <button class="hambuger">
            </button>
            <button class="search">
               <i class="fas fa-search fa-sm"></i>
            </button>
         </div>
         <div class="navbar.collapse">
            <ul>
               <li>
                  <a href="#"> clone </a>
               </li>
               <li is="dropdown" tag="li">
                  <div slot="button">
                     <a href="#"> cline </a>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </header>
</template>
<style lang="scss" scoped>
   .header {
      .navbar {
         .navbar {
            margin-bottom: 20px;
            min-height: 50px;
            position: relative;

            .navbar\.header {
               display: flex;
               align-items: center;
               justify-content: center;

               button {
                  border-radius: 4px;
                  padding: 9px 10px;
                  margin: 6px 0;
                  position: relative;
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

                     background-color: rgb(224, 224, 224);
                  }
               }

               .search {
                  margin: 2px 0;
                  padding: 9px;
               }
            }

            .navbar\.collapse {
               box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0 ins et;
               overflow-X: visible;

               ul {
                  margin-bottom: 7.5px;
                  margin-top: 7.5px;
                  list-style: none;

                  li {

                     &.active a,
                     a:hover {
                        background-color: rgb(0, 0, 0);
                        color: rgb(255, 255, 255);
                     }

                     a {
                        padding: 15px;
                        line-height: 20px;

                        i {
                           font-size: 1.2em;
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
   }
</style>
<script>
   import Dropdown from "./Dropdown.vue"
   
   export default {
      components: { Dropdown }
   }
</script>