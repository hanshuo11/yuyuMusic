<template>
  <div class="find">
    <Scroll class="recommend-content" ref="scroll">
      <div class="article">
        <div>
          <div class="article-item">
            <img @load="loadImage" src="../../common/image/default.png" alt="" class="user-icon">
            <div class="user-info"> 
              <span><i class="icon-music"></i> 分享歌曲：时光下乡</span>
            </div>
            <div class="artilce-content">
              <img src="../../common/image/default.png" alt="">
              <p>zhe shi 小可爱发的话啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
            </div>
          </div>
          <div class="article-item">
            <img @load="loadImage" src="../../common/image/default.png" alt="" class="user-icon">
            <div class="user-info"> 
              <span><i class="icon-music"></i> 分享歌曲：时光下乡</span>
            </div>
            <div class="artilce-content">
              <img src="../../common/image/default.png" alt="">
              <p>zhe shi 小可爱发的话啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
            </div>
          </div>
          <div class="article-item">
            <img @load="loadImage" src="../../common/image/default.png" alt="" class="user-icon">
            <div class="user-info"> 
              <span><i class="icon-music"></i> 分享歌曲：时光下乡</span>
            </div>
            <div class="artilce-content">
              <img src="../../common/image/default.png" alt="">
              <p>zhe shi 小可爱发的话啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
            </div>
          </div>
            <div class="article-item">
            <img @load="loadImage" src="../../common/image/default.png" alt="" class="user-icon">
            <div class="user-info"> 
              <span><i class="icon-music"></i> 分享歌曲：时光下乡</span>
            </div>
            <div class="artilce-content">
              <img src="../../common/image/default.png" alt="">
              <p>zhe shi 小可爱发的话啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
            </div>
          </div>
            <div class="article-item">
            <img @load="loadImage" src="../../common/image/default.png" alt="" class="user-icon">
            <div class="user-info"> 
              <span><i class="icon-music"></i> 分享歌曲：时光下乡</span>
            </div>
            <div class="artilce-content">
              <img src="../../common/image/default.png" alt="">
              <p>zhe shi 小可爱发的话啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll'
  export default {
    data() {
      return {
        commentShow: true,
        commentList: ['lalalalalala', 'you are so nice', 'lalalgo']
      }
    },
    components: {
      Scroll
    },
    methods: {
      handlePlayList(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.recommend.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      loadImage() {
        if (!this.checkedload) {
          this.$refs.scroll.refresh()
          this.checkedload = true
        }
      },
      back() {
        this.$router.back()
      },
      comment() {
        this.commentShow = false
      },
      sendComment() {
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';
  .find
    position: fixed;
    width: 100%;
    top: 69px;
    bottom: 0;
    .recommend-content
      height: 100%
      overflow: hidden
    .article-item
      padding: 15px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      color:$color-text-d
      .user-icon
        border-radius: 50%;
        width: 50px;
        height: 50px;
      .artilce-content
        margin-left: 58px;
        img
          width: 200px
          padding: 10px 0;
        p
          width: 75%;
        .comment-box
          width: 75%;
          .comment-button
            width: 25px;
          textarea
            border: 1px solid #ccc;
          .show
            display: none;
      .user-info 
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content center;
        span 
          padding: 8px
        p 
          padding: 8px
</style>
