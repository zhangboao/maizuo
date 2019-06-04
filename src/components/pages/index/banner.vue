<template>
<div class="swiper swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" 
             v-for="(item ,index ) in  banners"
             :key="index"
        >
          <img :src="item" alt="">
        </div>
      

    </div>
    <div class="swiper-pagination" id='hehe'></div>
      
  </div>
</template>
<script>
import Swiper from 'swiper'// 引入swiper插件
import Axios from 'axios'
export default {
  name:'banner',
  data(){
    return{
      banners:['https://static.maizuo.com/v5/upload/ec395ca4ed8e69b964ca3af2cd89a99d.jpg?x-oss-process=image/quality,Q_70','https://static.maizuo.com/v5/upload/95fc33cf5aece0ecb10e09d85d6e26ac.jpg?x-oss-process=image/quality,Q_70']
    }
  },
//   created(){
//     Axios.get('http://47.95.207.1:3000/fcj/recommend/banner')
//     .then((data)=>{
//       console.log(data)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   },
  mounted(){
    new Swiper('.swiper-container',{
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        bulletClass : 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      },
    })
  }
}
</script>
<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
@import url('../../../common/style/index.less');

.swiper{
    .h(210);
    .w(375);

   
    img{
        .w(375);
        .h(210);
        display:block;
    } 
}

</style>

