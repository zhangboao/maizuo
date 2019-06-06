<template>
  <div id="details">
    <div class="top">
      <img @click="back()" src="@/common/img/下载.png">
      <!-- <h2>{{title}}</h2> -->
      <h2>X战警：黑凤凰</h2>
    </div>
    <div class="bgimg" ref="bgimg">
      <img
        src="https://pic.maizuo.com/usr/movie/68c9c136c9008b80ad7552a4836fd83d.jpg?x-oss-process=image/quality,Q_70"
      >
    </div>
    <div class="film-detail" ref="film-detail">
      <div class="film-name">
        <span class="name" style="font-size: 18px; margin-top:7px; ">X战警：黑凤凰</span>
        <span class="item">3D</span>
        <div class="film-grade">
        <span class="grade">7.8</span>
        <span class="grade-text">分</span>
      </div>
      </div>
      
      <div class="grey-text">动作 | 科幻 | 冒险</div>
      <div class="grey-text">2019-06-06上映</div>
      <div class="grey-text">美国 | 114分钟</div>
      <div class="grey-text hidde">
        影片剧情围绕X战警中最受欢迎成员之一的琴·葛蕾展开，讲述她逐渐转化为黑凤凰的故事。
        在一次危及生命的太空营救行动中，琴被神秘的宇宙力量击中，成为最强大的变种人。
        此后琴·葛蕾不仅要设法掌控日益增长、极不稳定的力量，更要与自己内心的恶魔抗争，
        她的失控让整个X战警大家庭分崩离析，也让整个星球陷入毁灭的威胁之中。
        《X战警：黑凤凰》是迄今为止气氛最紧张、情感最丰富的一部《X战警》电影，
        是《X战警》系列20年来的集大成之作，大家非常熟悉和热爱的变种人大家庭即将面对最为强大的敌人
        ——而她恰恰还是他们中的一员。
      </div>
      <div class="toggle">
        <img src="@/common/img/下载 (1).png" alt>
      </div>
    </div>

 <!-- 演职人员 -->

    <div class="actors">
      <div class="actors-title-bar">
          <span class="actors-title-text ">演职人员</span>
      </div>
      <div class="row-scroll-wrapper">
        <ul class="row-scroll-items-nav">
          <li class="row-scroll-item">
           <img src="https://static.maizuo.com/pc/v5/usr/movie/3656345d8cbb89b980bc60a0c663d2f3.jpg?x-oss-process=image/quality,Q_70">
           <span class="actors-name">西蒙·金伯格</span>
           <span class="actors-role">导演</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 剧照 -->

    <div class="photos">
        <div class="photos-title-bar">
          <span class="photos-title-text">剧照</span>
          <span class="photos-to-all"> 
            全部（9）
            <i class="iconfont ">></i>
          </span>
        </div>
        <div class="row-scroll-wrapper">
          <ul class="row-scroll-items-nav">
            <li class="row-scroll-item">
              <img src="https://static.maizuo.com/pc/v5/usr/100004648/1fc74802d5872c1ebf3a90c6280588fc.jpg?x-oss-process=image/quality,Q_70">
            </li>
          </ul>
        </div>
    </div>

    <!-- bottom -->

    <div class="bottom">
      选座购票
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url("~style/index.less");
#details {
  background: #f4f4f4;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: scroll;
  .w(375);
  z-index: 1;
  .top {
    .w(375);
    .h(44);
    .l_h(44);
    position: absolute;
    background: white;
    img {
      .w(30);
      .h(30);
      position: absolute;
      .t(7);
      .l(7);
    }
    h2 {
      .w(375);
      text-align: center;
      font-weight: normal;
      font-size: 17px;
      color: #191a1b;
    }
  }
  .bgimg {
    .w(375);
    .h(210);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .film-detail {
    .h(186);
    .padding(0, 15, 15, 15);
    position: relative;
    background: #fff;
    .name{
      margin-right:7px;
      color: #191a1b;
      font-size: 18px;
      height: 24px;
      line-height: 24px; 
      font-weight: 400;
    }
    .item{
      background: #d2d6dc;
      color: #fff;
      font-size: 9px;
      height: 14px;
      line-height: 14px;
      padding: 0 2px;
      border-radius: 2px;
      display: inline-block;
      position: absolute;
      top: 21px;
    }
    .film-grade{
    box-sizing: border-box;
    float:right;
    .grade{
      text-align: right;
      color: #ffb232;
      font-size: 18px;
      font-style: initial;
    }
    .grade-text{
      text-align: right;
      color: #ffb232;
      font-size: 16px;
    }
    
  }
    .toggle {
      text-align: center;
      font-size: 0;
      .w(345);
      img{
        .mt(5);
        .w(8);
      }
    }
    .grey-text {
      font-size: 13px;
      color: #797d82;
      .mt(4);
      .l_h(19);
    }
    .grey-text.hidde {
      .mt(12);
      .h(38);
      overflow: hidden;
    }
  }
  .actors{
    margin-top: 10px;
    background: #fff;
      .actors-title-bar{
        width: 100%;
        padding: 15px;
         font-size: 0;
        box-sizing: border-box;
          .actors-title-text{
              font-size: 16px;
              text-align: left;
              color: #191a1b;
              font-weight: 200;
        }
      }
      .row-scroll-items-nav{
        padding-left: 15px;
        height: 141px;
        .row-scroll-item{
          width: 85px;
          min-width: 85px;
          img{
           width: 85px;
           height: 85px;
          }
          .actors-name{
            padding-top: 10px;
            font-size: 12px;
            color: #191a1b;
            width: 85px;
            height: 18px;
            display: block;
            overflow: hidden;
            text-align: center
          }
          .actors-role{
             font-size: 10px;
             color: #797d82;
             text-align: center;
             display: block;
          }
        }
      }
  }
  .photos{
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
    // height: 177px;
    .photos-title-bar{
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      font-size: 0;
      .photos-title-text{
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
      .photos-to-all{
         font-size: 13px;
        color: #797d82;
        float: right;
      }
    }
    .row-scroll-wrapper{
        height: 129px;
        .row-scroll-items-nav{
           align-items: center;
            position: relative;
            width: 100%;
            justify-content: flex-start;
            display: flex;
            .row-scroll-item{
              position: relative;
              margin-right: 10px;
              img{
                  width: 150px;
                  height: 100px;
                  position: absolute;
                  top: 50%;
              }
            }
        }
    }
  }
  .bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>

