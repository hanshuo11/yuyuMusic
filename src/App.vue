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
  },
  mounted() {
    alert(123);
  }
};
</script>

<style scoped lang="stylus">
</style>
