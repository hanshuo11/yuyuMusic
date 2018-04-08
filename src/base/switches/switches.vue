<template>
  <ul class="switches">
    <li 
      class="switch-item" 
      v-for="(item,index) in switches"
      :key="item.index"
      :class="{'active':currentIndex === index}"
      @click="switchItem(index)"
    >
      <div>{{item.name}} </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      switches: {
        type: Array,
        default: []
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      switchItem(index) {
        this.$emit('switch', index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .switches
    display: flex
    align-items: center
    width: 240px
    margin: 0 auto
    border: 1px solid $color-highlight-background
    border-radius: 5px
    .switch-item
      flex: 1
      padding: 8px
      text-align: center
      font-size: 18px
      background:$color-tools-background
      color:#fff
      .iconSwitch
        dislay :block
        font-size 25px
      &.active
        background:$color-tools-background
        color:#fff
        font-size :19px
        font-weight :bold !important
</style>