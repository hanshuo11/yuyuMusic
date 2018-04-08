<template>
  <div>
    <div class="search-box">
      <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
      <i @click="clear" v-show="query" class="icon-dismiss"></i>
      
    </div>
    <span class="clean" @click="clean">取消</span>
  </div>
</template>

<script>
  import {debounce} from 'common/js/util'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      },
      clean() {
        this.$store.commit('setHeaderTab')
        this.$router.back()
      }
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .search-box
    width: 80%
    height: 28px  
    position: absolute;
    top: 5px;
    display: flex
    align-items: center
    box-sizing: border-box
    padding: 0 6px
    margin-left:30px
    background: $color-highlight-background
    border-radius: 6px
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-highlight-background
      color: $color-text-d
      font-size: $font-size-medium
      outline:none
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-tools-background
  .clean
        position absolute
        right: 9px;
        top: -0;
  

</style>