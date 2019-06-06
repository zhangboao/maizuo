<template>
  <div id="movie">
    <banner></banner>
    <div class="subtab">
      <router-link class="subnav" tag="div" active-class="sel" to="/movie/nowPlaying">
        <span>正在热映</span>
      </router-link>
      <router-link class="subnav" tag="div" active-class="sel" to="/movie/soonPlaying">
        <span>即将上映</span>
      </router-link>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import banner from "common/banner";
import Axios from "axios";
import Footer from "common/footer.vue";
export default {
  name: "recommend",
  components: { banner,Footer }
};
</script>
<style lang="less" scoped>
@import url("~style/index.less");
#movie {
  position: fixed;
  top: 0;
  .b(50);
  .w(375);
  .subtab {
    .w(375);
    .h(49);
    .l_h(49);
    border-bottom: 1px solid #ededed;
    .subnav {
      width: 50%;
      float: left;
      font-size: @fs-s;
      text-align: center;
      color: #191a1b;
    }
    .sel {
      span {
        color: #ff5f16;
        .pb(14);
        border-bottom: 2px solid #ff5f16;
      }
    }
  }
}
</style>
