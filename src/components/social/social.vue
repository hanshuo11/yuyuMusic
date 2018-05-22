<template>
  <div class="social">
    <div class="user-box">
        <img src="../../common/image/user.png" alt="" class="user-icon" @click="selectFind('/user/user/userPreview')">
        <span v-show="username!=''">{{username}}</span>
         <span v-show="username==''">未登录</span>
        <input type="text" v-model="mood" @focus="focusUpdateMood" @blur="blurUpdateMood"
        style="background:transparent; text-align:center">
    </div>
    <div class="news list" @click="selectFind('user/news')">
        <i class="iconfont">&#xe665;</i>
        <span>我的消息</span>
    </div>
    <div class="firends list" @click="selectFind('/user/firends')">
       <i class="iconfont">&#xe625;</i>
        <span>我的好友</span>
    </div>
    <div class="comment list" @click="selectFind('/user/comments')">
        <i class="iconfont">&#xe656;</i>
        <span>我的评论</span>
    </div>
    <div class="skin list" @click="selectFind('/user/skin')">
        <i class="iconfont">&#xe678;</i>
        <span>个性换肤</span>
    </div>
    <div class="setStopTime list" @click="selectFind('/user/firends')">
        <i class="iconfont">&#xe64d;</i>
        <span>定时停止播放</span>
    </div>
    <div class="setStopTime list">
        <i class="iconfont">&#xe64b;</i>
        <span>设置</span>
    </div>
    <div class="loginout list" @click="loginOut">
        <i class="iconfont" >&#xe60f;</i>
        <span>退出</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        mood: '',
        username: ''
      }
    },
    watch: {
       username(val) {
         console.log('val',val);
         this.username = val;
      }
    },
    methods: {
      focusUpdateMood() {
        console.log(this.mood);
      },
      blurUpdateMood() {
      },
      selectFind(url) {
        this.$router.push(url);
      },
      loginOut() {
        let that = this;
        MessageBox.confirm('确定执行此操作?').then(action => {
          if (action == 'confirm') {
              localStorage.removeItem('user');
              postJSON("/user/loginOut", {}).then(function(res) {
              if(res.text === 'loginOut') {
                that.$router.push("/recommend");
              }
            })
          }
        }).catch(err => { 
          if (err == 'cancel') {     //取消的回调
          };
        })
      }
    },
    activated() {
      let userinfo = JSON.parse(localStorage.getItem('user'));
      this.username = userinfo.username;
      this.mood = userinfo.mood;
      console.log('social', userinfo.username)
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
        i 
          padding-right: 10px
          width: 25px
          height: 25px
          font-size: 27px
          

</style>
