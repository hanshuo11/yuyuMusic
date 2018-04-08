<template>
  <transition name="slide">
    <div class="login">
      <Back title="新用户注册"></Back>
      <div class="content">
        <div class="login-box">
          <div class="input">
            <i class="iconUser ic">&#xe62f;</i>
            <input class="box" placeholder="用户名"/>
          </div>
          <div class="input">
            <i class="iconPassword ic">&#xe652;</i>
            <input class="box" placeholder="密码"/>
          </div>
          <div class="input">
            <i class="iconPassword ic">&#xe652;</i>
            <input class="box" placeholder="再次确认密码"/>
          </div>
          <mt-button type="default" class="loginButton" @click="register">注册</mt-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from "base/back/commBack";
export default {
  data() {
    return {};
  },
  computed: {},
  components: {
    Back
  },
  methods: {
    back() {
      this.$router.back();
    },
    register() {
      console.log(123);
      this.$router.push("/user");
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
      margin-top: 25px;
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