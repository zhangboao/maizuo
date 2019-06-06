<template>
  <div id="scroll" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: ["data"],
  methods: {
    initBS() {
      if (!this.$refs.wrapper) {
        return false;
      }
      this.scroll = new BScroll(this.$refs.wrapper);
    }
  },
  watch: {
    // 监听数据有没有发生变化
    data(newVal, oldVal) {
      this.scroll.refresh();
      // 组件封装兼容处理
    }
  },
  mounted() {
    this.initBS();
  }
};
</script>
<style lang="less" scoped>
@import url("~style/index.less");
#scroll {
  color: #fff;
  height: 100%;
}
</style>

