<template>
  <div id="app">
    <index></index>
    <!-- <preference></preference> -->
  </div>
</template>

<script>
import index from "./components/pages/index/index.vue";
import preference from "./components/pages/preference.vue";
export default {
  name: "app",
  components: {
    index,
    preference
  }
};
</script>

<style lang="less">
</style>
