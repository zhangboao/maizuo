<template>
     <div class="swiper swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" 
             v-for="item ,index in  banners"
             :key="index"
        >
          <img src="item" alt="">
        </div>

    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'// 引入swiper插件
import Axios from 'axios'
export default {
  name:'banner',
  data(){
    return{
      banners:[]
    }
  },
  created(){
    Axios.get('http://47.95.207.1:3000/fcj/recommend/banner')
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  mounted(){
    new Swiper('.swiper-container',{
      loop:true
    })
  }
}
</script>
<style>

</style>

