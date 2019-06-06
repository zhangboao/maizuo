<template>
  <div id="nowPlaying" ref="wrapper">
    <ul class="now">
      <li v-for="(item,index) in films" :key="index" @click="goDetails(item.filmId)">
        <div class="img">
          <img :src="item.poster" alt>
        </div>
        <div class="txt">
          <div class="title">
            <span class="name">{{item.name}}</span>
            <span class="type">{{item.filmType}}</span>
          </div>
          <div class="score">
            <span>观众评分</span>
            <span class="grade">8</span>
          </div>
          <div class="actor">主演：{{item.actorStr}}</div>
          <div class="place">{{item.nation}} | {{item.runtime}}分钟</div>
        </div>
        <div class="buy">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from "axios";
import Scroll from "better-scroll";
export default {
  components: {},
  data() {
    return {
      films: []
    };
  },
  methods: {
    goDetails(filmid) {
      this.$router.push({ name: "details", query: { filmid } });
    }
  },
  created() {
    Axios.get(
      "https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/film/getList?type=1"
    ).then(res => {
      console.log(res.data.films);
      this.films = res.data.films;
      this.$nextTick(() => {
        this.scroll = new Scroll(this.$refs.wrapper, { click: true });
      });
    });
  }
};
</script>
<style lang="less" scoped>
@import url("~style/index.less");
#nowPlaying {
  overflow: hidden;
  position: fixed;
  .t(260);
  .b(50);
  .w(375);
  .now {
    .pl(15);
    .pr(15);
    li {
      display: flex;
      align-items: center;
      .pt(15);
      .pb(15);
      .h(94);
      .img {
        .w(66);
        .h(94);
        float: left;
        img {
          .w(66);
          .h(94);
        }
      }
      .txt {
        .pl(10);
        .pr(10);
        float: left;
        .w(209);
        .title {
          font-size: 0;
          .name {
            .mr(5);
            font-size: @fs-m;
            color: #191a1b;
            font-weight: 100;
            max-width: calc(100% - 25px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .type {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            .pl(2);
            .pr(2);
            border-radius: 2px;
          }
        }
        .score {
          font-size: 13px;
          color: #797d82;
          .grade {
            color: #ffb232;
            .ml(4);
            font-size: @fs-s;
          }
        }
        .actor,
        .place {
          .mt(4);
          font-size: 13px;
          color: #797d82;
          max-width: calc(100% - 25px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .buy {
        float: left;
        font-size: 13px;
        .l_h(23);
        text-align: center;
        .w(50);
        .h(23);
        border: 0;
        outline: none;
        color: #ff5f16;
        border: 1px solid #ff5f16;
        background-color: #fff;
        border-radius: 2px;
      }
    }
  }
}
</style>

