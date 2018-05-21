<template>
  <div class="social">
    <div class="user-box">
        <img src="../../common/image/user.png" alt="" class="user-icon" @click="selectFind('/user/user/userPreview')">
        <span>xiaokeai</span>
        <input type="text" v-model="mood" @focus="focusUpdateMood" @blur="blurUpdateMood"
        style="background:transparent; text-align:center">
    </div>
    <div class="news list" @click="selectFind('user/news')">
        <img src="../../common/image/envelope.png" alt="">
        <span>我的消息</span>
    </div>
    <div class="firends list" @click="selectFind('/user/firends')">
        <img src="../../common/image/firends.png" alt="">
        <span>我的好友</span>
    </div>
    <div class="comment list" @click="selectFind('/user/comments')">
        <img src="../../common/image/comments.png" alt="">
        <span>我的评论</span>
    </div>
    <div class="skin list" @click="selectFind('/user/skin')">
        <img src="../../common/image/paint.png" alt="">
        <span>个性换肤</span>
    </div>
    <div class="setStopTime list" @click="selectFind('/user/firends')">
        <img src="../../common/image/Time.png" alt="">
        <span>定时停止播放</span>
    </div>
    <div class="setStopTime list">
        <img src="../../common/image/Time.png" alt="">
        <span>退出</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mood: 'hello 小可爱'
      }
    },
    methods: {
      focusUpdateMood() {
        console.log(this.mood)
      },
      blurUpdateMood() {
      },
      selectFind(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped lang="stylus">
    .social
      .user-box
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        flex-wrap: nowrap
        width: 100%
        height: 120px
        background: url('../../common/image/bg-usericon.jpg') 50% 50% no-repeat;
        margn-bottom: 30px
        span 
          padding: 5px;
        img 
          background: #fff
          border-radius: 50%
      .list
        display: flex
        flex-direction: row
        align-items: center
        flex-wrap: nowrap
        width: 100%
        height: 40px;
        margin-left: 25px
        img 
          padding: 0 10px 0 0;
          width: 25px
          height: 25px
          

</style>
