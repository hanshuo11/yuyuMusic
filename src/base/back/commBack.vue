<template>
  <div class="commBack">
    <i @click="back" class="iconBack">&#xe618;</i>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    back() {
      if (this.title == "登录") this.$store.commit("setMinPlayerShow", true);
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

.commBack {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: $color-tools-background;
    position: fixed;
    top: 0;
    z-index: 200;
    text-align: center;

    .title {
        color: #fff;
        font-size: 18px;
    }

    .iconBack {
        color: #fff;
        font-size: 20px;
        position: absolute;
        left: 8px;
        top: 8px;
    }
}
</style>
