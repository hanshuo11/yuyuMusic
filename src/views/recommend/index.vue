<template>
  <div class="recommend" ref="recommend">
    <Scroll class="recommend-content" :data="discList" ref="scroll">
      <div>
        <div class="slider-wrapper" v-if="recommendList.length">
          <slider>
            <!--slot-->
            <div v-for="item in recommendList" :key="item.key">
              <a :href="item.linkUrl">
                <img @load="loadImage" class="needsclick" :src="item.picUrl"/>
              </a>
            </div>
          </slider>
        </div>
        <h2 class="list-title">热门歌单推荐</h2>
        <div class="recommend-list">
          <ul>
            <li v-for="item in discList" class="item" :key="item.key" @click="selectItem(item)">
              <div class="icon">
                <img v-lazy="item.imgurl" width="100%" height="100%"/>
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </Scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import Loading from 'base/loading'
  import Slider from 'base/slider'
  import Scroll from 'base/scroll'
  import { getRecommend, getDiscList } from 'api/recommend'
  import { ERR_OK } from 'api/config'
  import { playListMixin } from 'common/js/mixin'
  import { mapMutations } from 'vuex'

  export default {
    mixins: [playListMixin],
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    data() {
      return {
        recommendList: [],
        discList: []
      }
    },
    components: {
      Slider,
      Scroll,
      Loading
    },
    methods: {
      handlePlayList(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.recommend.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      // jsonp
      _getRecommend () {
        getRecommend().then(res => {
          if (res.code === ERR_OK) {
            this.recommendList = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then(res => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      },
      loadImage() {
        if (!this.checkedload) {
          this.$refs.scroll.refresh()
          this.checkedload = true
        }
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)
        console.log(this.$store.state.disc)
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
      // _getRecommend () {
      //   let params = {
      //     g_tk: 5381,
      //     uin: 0,
      //     format: 'json',
      //     inCharset: 'utf-8',
      //     outCharset: 'utf-8',
      //     notice: 0,
      //     platform: 'h5',
      //     needNewCode: 1
      //   }
      //   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?'
      //   this.$http.get(url, {
      //     params: params
      //   }).then(res => {
      //     console.log(res.data.slider)
      //   }).catch(error => {
      //     console.log(error)
      //   })
      // }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 69px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .list-title
        width: 100%
        height: 50px
        line-height: 50px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .recommend-list
        ul
          display: flex;
          flex-direction: row;
          justify-content: space-around
          flex-wrap: wrap;
          .item
            box-sizing: border-box
            width: 30%
            .icon
              flex: 0 0 60px
              width: 100%
            .text
              display: flex
              flex-direction: column
              justify-content: center
              flex: 1
              line-height: 20px
              overflow: hidden
              font-size: $font-size-medium
              .name
                color: $color-text
              .desc
                color: $color-text-d
                verflow : hidden;
                font-size: 12px
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
