<template>
  <div class="swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item ,index ) in  banners" :key="index">
        <img :src="item.imgUrl" alt>
      </div>
    </div>
    <div class="swiper-pagination" id="hehe"></div>
  </div>
</template>
<script>
import Swiper from "swiper"; // 引入swiper插件
import Axios from "axios";
export default {
  name: "banner",
  data() {
    return {
      banners: []
    };
  },
  created() {
    Axios({
      url: "/api/gateway?type=2&cityId=110100&k=3329846",
      method: "get",
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15595461575025111736417"}`,
        "X-Host": "mall.cfg.common-banner"
      }
    }).then(res => {
      console.log(res.data.data);
      this.banners = res.data.data;
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: true,
          pagination: {
            el: ".swiper-pagination",
            bulletClass: "my-bullet",
            bulletActiveClass: "my-bullet-active"
          }
        });
      });
    });
  }
};
</script>
<style lang="less" scoped>
@import url("~node_modules/swiper/dist/css/swiper.min.css");
@import url("~style/index.less");

.swiper {
  .h(210);
  .w(375);
  img {
    .w(375);
    .h(210);
    display: block;
  }
}
</style>

