<template>
   <div class="backdrop.mark" @click="$emit('click')"></div>
</template>
<style lang="scss" scoped>
   .backdrop\.mark {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      background-color: rgba(1, 5, 16, .9);
   }
</style>
<script>
   export default {

   }
</script>