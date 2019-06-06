<template>
  <div class="tab">
    <!-- tab 指定router link 渲染的元素 -->
    <router-link active-class="sel" class="nav" to="/movie/nowPlaying" tag="div">
      <img src>
      <span>电影</span>
    </router-link>
    <router-link class="nav" active-class="sel" to="/cinema" tag="div">
      <img src>
      <span>影院</span>
    </router-link>
    <router-link class="nav" active-class="sel" to="/prefer" tag="div">
      <img src>
      <span>特惠</span>
    </router-link>
    <router-link class="nav" active-class="sel" to="/my" tag="div">
      <img src>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
@import "~style/index.less";
.tab {
  position: fixed;
  border-top: 1px solid #ededed;
  bottom: 0;
  .w(375);
  .h(49);
  font-size: 0;
  background: #fff;
  .nav {
    float: left;
    text-align: center;
    color: #797d82;
    width: 25%;
    .h(49);
    font-size: @fs-xs;
    position: relative;
    img {
      .w(21);
      .h(21);
      .pt(8);
    }
    span {
      position: absolute;
      left: 50%;
      .t(30);
      transform: translateX(-50%);
    }
  }
  .sel {
    color: #ff5f16;
  }
}
</style>
