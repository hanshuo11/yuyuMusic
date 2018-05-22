<template>
  <div id="app" @touchmove.prevent>
    <m-header v-show="hreaderAndTopFlag"></m-header>
    <tab v-show="hreaderAndTopFlag"></tab>
    <!-- 利用缓冲来解决重复加载 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--播放器全局组件-->
    <player></player>
  </div>
</template>

<script>
import MHeader from "components/mHeader/mHeader";
import Tab from "components/tab";
import Player from "components/player/player";
export default {
  name: "app",
  components: {
    MHeader,
    Tab,
    Player
  },
  computed: {
    hreaderAndTopFlag() {
      return this.$store.state.hreaderAndTopFlag;
    }
  }
};
</script>

<style scoped lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 676447 */
  src: url('//at.alicdn.com/t/font_676447_vg3z1yvj3n7jsjor.eot');
  src: url('//at.alicdn.com/t/font_676447_vg3z1yvj3n7jsjor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_676447_vg3z1yvj3n7jsjor.woff') format('woff'),
  url('//at.alicdn.com/t/font_676447_vg3z1yvj3n7jsjor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_676447_vg3z1yvj3n7jsjor.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
