<template>
  <div class="firends">
    <div><back></back></div>
    <div class="title">
      <span>我的好友</span>
    </div>
    <ul class="list">
      <li v-for="(user,index) in userInfo" @click="selectFind('user/userPreview')" :key="index">
        <img :src="user.img" alt="">
        <span>{{user.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Back from 'base/back/back'
  import imgv from '../../common/image/default.png'
  export default {
    data() {
      return {
        userInfo: [
          {name: '小白羊',
            img: imgv
          },
          {name: '小白羊',
            img: imgv
          },
          {name: '小白羊',
            img: imgv
          },
          {name: '小白羊',
            img: imgv
          },
          {name: '小白羊',
            img: imgv
          }
        ]
      }
    },
    components: {
      Back
    },
    methods: {
      back() {
        this.$router.back()
      },
      selectFind(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .firends
    width: 100%;
    overflow: auto
    background: #cddfcb;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  .title
    width: 100%;
    height: 50px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3)
    span
      width: 100%;
      line-height: 54px;
      font-weight: 400;
  .list
    width: 100%;
    li
      width: 100%;
      height: 80px;
      display: flex;
      flex-warp: nowarp;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3)
      img 
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 20px;
</style>
