<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">音乐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行榜</span>
    </router-link>
     <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/social">
      <span class="tab-link">圈子</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

.tab {
  display: flex;
  height: 30px;
  line-height: 30px;
  background: $color-tools-background;
  font-size: $font-size-medium;
  margin-top: -1px;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: $color-text;
    }

    &.router-link-active {
      .tab-link {
        color: $color-text;
        font-size: $font-size-medium-x;
        font-weight: 600;
        // border-bottom: 2px solid $color-theme
      }
    }
  }
}
</style>
