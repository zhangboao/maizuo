<template>
  <div id="details">
    <div class="top">
      <img @click="back()" src="@/common/img/下载.png">
      <!-- <h2>{{title}}</h2> -->
      <h2>X战警：黑凤凰</h2>
    </div>
    <div class="bgimg" :style="bgstyle" ref="bgimg">
      <img
        src="https://pic.maizuo.com/usr/movie/68c9c136c9008b80ad7552a4836fd83d.jpg?x-oss-process=image/quality,Q_70"
      >
    </div>
    <div class="film-detail" ref="film-detail">
      <div class="film-name">
        <span class="name" style="font-size: 18px; margin-top:7px; ">X战警：黑凤凰</span>
        <span class="item">3D</span>
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
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url("~style/index.less");
#details {
  position: fixed;
  top: 0;
  bottom: 0;
  .w(375);
  background: #fff;
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
    .padding(12, 15, 15, 15);
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
}
</style>

