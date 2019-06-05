<template>
  <div class="maximum">
    <div class="bar">
      <img src="../../../common/img/preference-left.png" class="preference-left">
    </div>
    <div class="welfare">
      <img src="../../../common/img/special-jie.jpg">
    </div>
    <div class="dish">
      <img src="../../../common/img/special-pan.jpg">
    </div>
    <div class="fresh">
      <img src="../../../common/img/special-dong.jpg">
    </div>
    <div class="fresh">
      <img src="../../../common/img/special-xiu.jpg">
    </div>
    <div class="fresh">
      <img src="../../../common/img/special-zhi.jpg">
    </div>
    <div class="fresh">
      <img src="../../../common/img/special-shai.jpg">
    </div>
    <div class="fresh">
      <img src="../../../common/img/special-sheng.jpg">
    </div>
    <div class="fresh">
      <img src="../../../common/img/special-wu.jpg">
    </div>
    <div class="handpick">
      <img src="../../../common/img/special-jing.jpg">
    </div>
    <div class="quality">
      <img src="../../../common/img/special-xuan.jpg">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url("../../../common/style/index.less");
.maximum {
  padding-top: 49px;
  width: 100%;
  overflow: hidden;
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    z-index: 300;
    background: #fff;
    align-items: center;
    display: flex;
    img {
      width: 11px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 14px;
    }
  }
  .welfare {
    width: 100%;
    img {
      display: block;
      .w(375);
      .h(480);
    }
  }
  .dish {
    img {
      display: block;
      .h(52);
      .w(375);
    }
  }
  .fresh {
    img {
      display: block;
      .h(285);
      .w(375);
    }
  }
  .handpick {
    img {
      display: block;
      .h(108);
      .w(375);
    }
  }
  .quality {
    img {
      display: block;
      .h(82);
      .w(375);
    }
  }
}
</style>
