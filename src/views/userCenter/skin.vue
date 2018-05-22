<template>
  <div class="skin">
    <back></back>
    <h3>推荐</h3>
    <div class="skin-box">
      <div class="skin-color" v-for="(val, index) in colorList">
        <div class="color" :class="colorClass" @click="chooseColor($event)"></div>
        <span>红色</span>
      </div>
    </div>
  </div>  
</template>
<script>
  import Back from 'base/back/back'
  export default {
    data() {
      return {
        colorList: [{
          color: '红色',
          colorClass: 'red'
        },{
          color: '蓝色',
          colorClass: 'blue'
        },{
          color: '绿色',
          colorClass: 'green'
        }]
      }
    },
    components: {
      Back
    },
    methods: {
      chooseColor(e) {
        var aColor = document.querySelectorAll('.color')
        for (var i = 0; i < aColor.length; i++) {
          console.log(aColor[i].className)
          var aColorVal = aColor[i].className
          aColorVal.replace('choose', '')
        }
        e.target.className = e.target.className + ' choose'
      }
    }
  }
</script>
<style scoped lang="stylus">
.skin
  background: #cddfcb;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0; 
  h3
    margin: 22px 40px;
  .skin-box
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    .color
      width: 30%;
      height: 50px;
      margin: 10px auto;
    .red 
      background: red;
    .blue 
      background: blue;
    .green
      background: green;  
    .choose
      background-image: url('../../common/image/yes.png');
      background-position: center;
      background-repeat: no-repeat;
</style>

