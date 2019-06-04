<template>
  <div class="tab">
    <!-- tab 指定router link 渲染的元素 -->
      <router-link 
      active-class='sel'
      class='nav'
      to="/recommend" tag='div'>
        电影
      </router-link>
      <router-link 
      class='nav'
      active-class='sel'
      to="/singer" tag='div'>
        影院
      </router-link>
      <router-link 
      class='nav'
       active-class='sel'
      to="/rank" tag='div'>
        特惠
      </router-link>
      <router-link 
      class='nav'
       active-class='sel'
      to="/search" tag='div'>
        我的
      </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
@import '~style/index.less';
.tab{
  position:fixed;
  bottom:0;
  .w(375);
  .h(44);
  font-size: 0;
  .nav{
    display: inline-block;
    color:@bg-black;
    width: 25%;
    .h(44);
    font-size: @fs-s;
    text-align: center;
    .l_h(44);
  }
  .sel{
    color:@fc-yellow;
  }
}

</style>
