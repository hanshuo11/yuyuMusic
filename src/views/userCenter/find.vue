<template>
  <div class="find">
    <Scroll class="recommend-content" ref="scroll">
      <div class="article">
        <div style="height: 50px">
          <mt-badge size="large" 
            style="margin-top: 20px; margin-right: 10px; float: right"
          >
            <div @click="showPop">
              写点什么
            </div>
          </mt-badge>
          <mt-popup
            v-model="popupVisible"
            position=""
            popup-transition="popup-fade">
            <div style="width:300px;height:500px; margin: -50px auto">
              <p></p>
              <mt-field placeholder="这一刻的想法" type="textarea"  rows="8" style="color: #000"></mt-field>
            </div>
          </mt-popup>
        </div>
        <div>
          <div class="article-item" v-for="(songCom, index) in songCommentList">
            <img @load="loadImage" src="../../common/image/default.png" @click="selectFind('user/user/userPreview')" alt="" class="user-icon">
            <div class="user-info"> 
              <span><i class="icon-music"></i> 分享歌曲：{{songCom.songname}}</span>
            </div>
            <div class="artilce-content">
              <img src="../../common/image/joy.jpg" alt="">
              <p>
                {{songCom.content}}
                <img src="../../common/image/comments.1.png" class="comment-button" @click="comment(index)" alt="">
              </p>
              <div class="comment-box" v-show="commentShow == index"  @click="sendComment">
                <div class="add-button">添加评论</div>
                <div class="comment">
                  <p><span  @click="selectFind('user/user/userPreview')">龙的传人：</span> {{songCom.comment}}</p>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
    <div class="sendBox" v-show="sendBoxShow">
      <input type="text" class="sendBar" @keyup.enter="sendMsg" ref="sendBar" placeholder="想对他说点什么">
    </div>
  </div>
</template>

<script>
import Scroll from "base/scroll";
export default {
  data() {
    return {
      aa: "",
      commentShow: null,
      sendBoxShow: false,
      popupVisible: false,
      songCommentList: [
        {
          songname: "不爱我就拉倒",
          content:
            "周杰伦这首新歌曲调不错，但是歌词写的实在太赶课了 - 2018-04-30",
          comment: "没错，快点让方文山来拯救杰伦的土味歌词吧！！- 2018-05-01",
          imgUrl: "../../common/image/aa.jpg"
        },
        {
          songname: "时光遐想",
          content: "这首歌非常清新啊 - 2018-01-28",
          comment:
            "这首歌阐述了对青春懵懂的心态和对昔日生活的记忆 - 2018-01-28 ",
          imgUrl: "../../common/image/joy.jpg"
        }
      ]
    };
  },
  components: {
    Scroll
  },
  methods: {
    handlePlayList(playlist) {
      const bottom = playlist.length > 0 ? "60px" : "";
      this.$refs.recommend.style.bottom = bottom;
      this.$refs.scroll.refresh();
    },
    loadImage() {
      if (!this.checkedload) {
        this.$refs.scroll.refresh();
        this.checkedload = true;
      }
    },
    showPop() {
      console.log(this.popupVisible);
      this.popupVisible = !this.popupVisible;
    },
    back() {
      this.$router.back();
    },
    selectFind(url) {
      this.$router.push(url);
    },
    comment(index) {
      this.commentShow = index;
    },
    sendComment() {
      this.sendBoxShow = !this.sendBoxShow;
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

.find {
  position: fixed;
  width: 100%;
  top: 69px;
  bottom: 0;

  .sendBox {
    position: fixed;
    bottom: 0;
    height: 50px;
    z-index: 1000;
    left: 0;
    right: 0;
    background: #cddfcb;

    .sendBar {
      width: 80%;
      position: absolute;
      top: 20px;
      left: 20px;
      border: none;
      border-bottom: 2px solid #517089;
      outline: none;
      background: #cddfcb;
    }
  }

  .recommend-content {
    height: 100%;
    overflow: hidden;
  }

  .article-item {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    color: $color-text-d;

    .user-icon {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }

    .artilce-content {
      margin-left: 58px;

      img {
        width: 200px;
        padding: 10px 0;
      }

      p {
        font-size: 13px;
        width: 200px;
        line-height: 20px;
        box-sizing: border-box;

        .comment-button {
          width: 20px;
          height: 20px;
          margin: 0;
          padding-right: 5px;
          float: right;
        }
      }

      .add-button {
        font-size: 13px;
        color: #888;
        line-height: 30px;
      }

      .comment {
        background: #eee;
        padding: 10px 5px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-self: center;
        border-radius: 10%;
        width: 75%;

        p {
          line-height: 20px;
          margin-left: 10px;
        }

        img {
          padding: 0;
        }

        .user-icon {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }

        textarea {
          border: 1px solid #ccc;
        }

        .show {
          display: none;
        }
      }
    }

    .user-info {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;

      span {
        padding: 8px;
      }

      p {
        padding: 8px;
      }
    }
  }
}
</style>
