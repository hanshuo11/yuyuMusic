<template>
  <div class="userPreview">
    <back></back>
     <div class="user-box">
        <img src="../../../common/image/bg-usericon.jpg" alt="" class="user-icon"/>
        <span>xiaokeai</span>
        <p>jjjjjjjjjjjjjjjjjjjjjj</p>
        <div class="user-bottom">
          <button>好友(10)</button>
          <button @click="selectFind('/user/news')">私信</button>
        </div>
    </div> 
    <div class="switch"><switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches></div>
    <div class="list-content">
      <ul v-if="currentIndex == 0">
        <li>
          <img src="../../../common/image/bg-usericon.jpg" alt=""/>
          <p>
            <h4>春姑娘</h4>
            <span>lalagugu</span>
          </p>
        </li>
        <li>
          <img src="../../../common/image/bg-usericon.jpg" alt=""/>
          <div>
            <h4>春姑娘--</h4>
            <span>lalagugu</span>
          </div>
        </li>
        <li>
          <img src="../../../common/image/bg-usericon.jpg" alt="">
          <div>
            <h4>春姑娘--</h4>
            <span>lalagugu</span>
          </div>
        </li>
      </ul>
      <ul v-if="currentIndex == 1">
        <!-- <li>
          <img src="./bg-usericon.jpg" alt="">
          <div>
            <h4>来了--</h4>
            <span>mamacoco</span>
          </div>
        </li>
        <li>
          <img src="./bg-usericon.jpg" alt="">
          <div>
            <h4>她来到田野上--</h4>
            <span>mamacoco</span>
          </div>
        </li>
        <li>
          <img src="./bg-usericon.jpg" alt="">
          <div>
            <h4>小妹妹小弟弟都出来展望--</h4>
            <span>mamacoco</span>
          </div>
        </li> -->
        <div class="article-item">
          <img src="../../../common/image/bg-usericon.jpg" alt="" class="user-icon">
          <div class="user-info"> 
            <span><i class="icon-music"></i> 分享歌曲：时光遐想</span>
            <p class="time">11:26</p>
          </div>
          <div class="artilce-content">
            <img src="../../../common/image/bg-usericon.jpg" alt="">
            <p>这首歌阐述了对童年的怀念和对昔日生活的记忆</p>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import Back from 'base/back/back'
  import Switches from 'base/switches/switches'
  export default {
    data() {
      return {
        switches: [
          {name: '喜欢'},
          {name: '动态'}
        ],
        currentIndex: 0
      }
    },
    components: {
      Back,
      Switches
    },
    methods: {
      back() {
        console.log('hiqu')
      },
      switchItem(index) {
        this.currentIndex = index
      },
      selectFind(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .userPreview
    width: 100%;
    overflow: auto
    background: #cddfcb;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    .user-box
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      flex-wrap: nowrap
      width: 100%
      height: 300px
      background: url('../../../common/image/bg-usericon.jpg') 50% 50% no-repeat;
      margn-bottom: 30px
      span 
        padding: 5px;
      img 
        width: 80px
        height: 80px
        background: #fff
        border-radius: 50%
      .list
        display: flex
        flex-direction: row
        align-items: center
        flex-wrap: nowrap
        width: 100%
        height: 40px;
        img 
          padding: 0 10px 0 0;
          width: 25px
          height: 25px
      .user-bottom
        position:relative;
        margin-top: 50px;
        button
          margin: 0 40px;
          background: transparent;
          border: 0;
    .switch
      margin: 20px 0;
    .list-content
      width: 100%;
      li
        display: flex;
        flex-flow: wrap;
        align-items: center;
        height: 40px;
        padding: 5px 10px;
        img 
          width: 40px;
          height: 40px;  
          margin-right: 10px;
        div       
          display: flex;
          flex-direction: columns;
      .article-item
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .user-icon
          border-radius: 50%;
          width: 50px;
          height: 50px;
        .artilce-content
          margin-left: 58px;
          img
            width: 200px
            padding: 10px 0;
          p
            width: 75%;
        .user-info 
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content center;
          span 
            padding: 8px
          p 
            padding: 8px
</style>
