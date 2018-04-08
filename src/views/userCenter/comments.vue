<template>
  <div class="comments">
    <back></back>
    comments
  </div>
</template>

<script>
  import Back from 'base/back/back'
  export default {
    data() {
      return {
      }
    },
    components: {
      Back
    },
    methods: {
      back() {
      }
    }
  }
</script>

<style scoped lang="stylus">
  .comments
    background: #cddfcb;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    
</style>
