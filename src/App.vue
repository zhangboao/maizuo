<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "common/footer.vue";
export default {
  name:"app",
  components: { Footer }
}
// scoped 样式作用域 lang 选择语言
</script>
<style lang="less" scoped>
</style>
