<template>
  <div class="news">
    <back></back>
    <div class="title">
      <span>消息-拉拉咕咕</span>
    </div>
    <div class="content" ref="content">
      <div v-for="(newsItem,index) in newsList" :key="index">
        <div :class="newsItem.source" >
          <img src="../../common/image/Picture.png" alt="">
          <p><span v-if="!newsItem.img">{{newsItem.content}}</span><img :src="newsItem.img" alt="" v-else></p>
        </div>
      </div>
      <div class="go_bottom" ref="goBottom" href="#1"></div>
    </div>
    <div class="sendBox">
      <label for="img_input">
        <img src="../../common/image/Picture.png" alt="" ref="picture" @click="postPicture">
      </label>
      <input id="img_input" type="file" accept="image/*" ref="imgAdd" @change="imgInput()">
      <input type="text" class="sendBar" @keyup.enter="sendMsg" ref="sendBar" placeholder="想对他说点什么">
    </div>
  </div>
</template>

<script>
  import Back from 'base/back/back'
  export default {
    data() {
      return {
        newsList: [
          {source: 'firend',
            content: 'xxxxxxxxxxxxxxxx'
          },
          {source: 'self',
            content: '拉布拉布'
          },
          {source: 'firend',
            content: '丑的像只pig的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig图4从期货业5不要太v让发车是我a'
          },
          {source: 'self',
            content: '丑的像只pig 哥哥丑的像只pig 哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig图4从期货业5不要太v让发车是我a'
          },
          {source: 'self',
            content: '丑的像只pig 哥哥丑的像只pig 哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig哥哥丑的像只pig图4从期货业5不要太v让发车是我a'
          },
          {source: 'self',
            img: '../../common/image/Picture.png'
          }
        ],
        selfList: {}
      }
    },
    components: {
      Back
    },
    methods: {
      sendMsg() {
        this.$refs.goBottom.scrollIntoView('false')
        let msg = this.$refs.sendBar.value
        let msgItem = {source: 'self', content: msg}
        this.newsList.push(msgItem)
      },
      postPicture(event) {
        console.log(event)
        this.imgInput(event)
      },
      imgInput(event) {
        console.log(event)
        let file = event.target.files[0]
        if (!file.type.match('image.*')) {
          return false
        }
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(arg) {
          let imgItem = {source: '/self', img: arg}
          this.newsList.push(imgItem)
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .mini-player
    display: none;
  .news
    width: 100%;
    overflow: auto
    background: #cddfcb;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    .title
      position: fixed;
      width: 100%;
      top: 0;
      height: 44px;
      span
        display: block;
        text-align: center;
        line-height: 50px;
    .content
      margin-top: 50px;
      height: 570px;
      background #eee;
      overflow: auto;
      position: relative;
      .go_bottom
        background: transparent;
        height: 60px;
      a
        display: block;
        width: 100%;
        height: 10px;
        background: #000;
      .self
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        p
          max-width: 75%; 
          border-radius: 10px;
          background-color: #517089;  
          color: #fff; 
          padding: 10px;
          float: right;
          line-height: 20px;
        img 
          float: right;
          border-radius: 50%;
          margin: 10px;
      .firend
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        p
          max-width: 75%; 
          border-radius: 10px;
          background-color: #517089;  
          color: #fff; 
          padding: 10px;
          float: left;
          line-height: 20px;
        img 
          border-radius: 50%;
          margin: 10px;
          float: left;
    .sendBox
      position: fixed;
      bottom: 0;
      height: 50px;
      z-index: 1000;
      left: 0;
      right: 0;
      background #cddfcb;
      .sendBar
        width: 80%;
        position: absolute;
        top: 20px;
        left: 20px;
        border: none;
        border-bottom: 2px solid #517089;
        outline: none;
        background #cddfcb;
      label 
        position: absolute;
        right: 10px;
        top: 20px;
</style>
