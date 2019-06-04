<template>
  <div id="app">
      <router-view></router-view>
      <tab></tab>
  </div>
</template>

<script>
import  tab from  'common/tab'
export default {
  name: 'app',
  components:{tab}
}
// scoped 样式作用域 lang 选择语言
</script>
<style lang="less" scoped>
// @import url('./common/style/index.less');

// #app{
  // p{
    // background : @bg;
    // .demo(@bg);
    // background: red;
  //   .w(60);
  //   height: 100px;
  //   background: red;
  // }
// }
</style>
