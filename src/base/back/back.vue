<template>
  <div class="back" @click="back">
    <i class="iconBack">&#xe618;</i>
  </div>
</template>

<script>

  export default {
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .back
    position: fixed;
    top: 16px;
    left: 10px;
    z-index: 200;
    font-size :20px;
</style>
