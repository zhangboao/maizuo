<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
// scoped 样式作用域 lang 选择语言
</script>
<style lang="less" scoped>
@import url("~style/index.less");
#app {
  position: fixed;
  .w(375);
  top: 0;
  bottom: 0;
}
</style>
