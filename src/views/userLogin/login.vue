<template>
  <transition name="slide">
    <div class="login">
      <Back title="登录"></Back>
      <div class="content">
        <div class="login-box">
          <div class="input">
            <i class="iconUser ic">&#xe62f;</i>
            <input class="box" placeholder="用户名" v-model="username"/>
          </div>
          <div class="input">
            <i class="iconPassword ic">&#xe652;</i>
            <input class="box" placeholder="密码" v-model="password"/>
          </div>
          <mt-button type="default" class="loginButton" @click="login">登录</mt-button>
          <mt-button type="default" class="loginButton" @click="register">注册</mt-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from "base/back/commBack";
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {},
  components: {
    Back
  },
  methods: {
    back() {
      this.$router.back();
    },
    login() {
      console.log(123)
      let that = this
      if (this.username != '' && this.password != '') {
        postJSON("/user/login", { username: that.username, password: that.password}).then(function(res) {
          console.log(res.text)
          let getRes = JSON.parse(res.text)
          if (getRes.cookie) {
            localStorage.setItem("user", JSON.stringify(getRes.cookie));
            console.log(localStorage.getItem("user"))
          }
          if (getRes.resStatus === 'success') {
            MessageBox({
              title: '提示',
              message: '登录成功',
              showCancelButton: false
            }).alert;
            that.$router.push("/user");
          } else {
            MessageBox({
              title: '提示',
              message: '登录失败',
              showCancelButton: false
            });
          }
        });
      }
     
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

.login {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  color: $color-text-d;
  background: $color-background;

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    top: 40px;

    .loginButton {
      display: block;
      margin: 0 auto;
      padding: 0 120px;
      margin-top: 8px;
      border: 1px solid $color-tools-background;
      background: $color-tools-background;
      color: #fff;
      font-size: 20px;
    }

    .login-box {
      width: 100%;
      height: 300px;
      text-align: center;
      padding-top: 150px;

      .input {
        width: 250px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #eee;
        margin: 10px auto;
        border-radius: 5px;
        position: relative;

        .ic {
          position: absolute;
          left: 9px;
          top: 4px;
          font-size: 20px;
        }

        input {
          height: 100%;
          padding: 0px 10px;
          margin-left: 30px;
          outline: none;
          touch-action: none;
        }
      }
    }
  }
}
</style>