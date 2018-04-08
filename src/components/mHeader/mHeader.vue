<template>
  <div class="m-header">
    <router-link tag="div"  to="/search">
      <span class="search-div" @click="toSearch">
        <i class="iconSearch">&#xe61a;</i>搜索
      </span>
    </router-link>
    <span class="userIcon" @click="userIcon"><i class="iconUser">&#xe601;</i></span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fullScreen", "toUserPage"])
  },
  methods: {
    toSearch() {
      this.$store.commit("setHeaderTab");
    },
    userIcon() {
      if (!this.fullScreen) {
        this.$store.commit("setMinPlayerShow", false);
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.m-header {
  position: relative;
  text-align: center;
  background: $color-tools-background;
  height: 40px;

  .search-div {
    width: 72%;
    height: 28px;
    line-height: 28px;
    position: absolute;
    left: 51px;
    top: 5px;
    font-size: $font-size-medium-x;
    background: #149c5a;
    border-radius: 10px;

    .iconSearch {
      font-size: 23px;
    }
  }

  .userIcon {
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    right: 16px;
    top: 7px;
    font-size: 23px;
  }
}
</style>
