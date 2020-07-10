<template>
<div>
  <!--占位符-->
  <router-view></router-view>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png"/>
      <img slot="item-icon-blue" src="~assets/img/tabbar/homeblue.png"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/fenlei">
      <img slot="item-icon" src="~assets/img/tabbar/fenlei.png"/>
      <img slot="item-icon-blue" src="~assets/img/tabbar/fenliebule.png"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/car">
      <img slot="item-icon" src="~assets/img/tabbar/car.png"/>
      <img slot="item-icon-blue" src="~assets/img/tabbar/carblue.png"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/me">
      <img slot="item-icon" src="~assets/img/tabbar/me.png"/>
      <img slot="item-icon-blue" src="~assets/img/tabbar/meblue.png"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>

</template>

<script>
  import TabBar from '../common/tabbar/TabBar'
  import TabBarItem from '../common/tabbar/TabBarItem'
  export default {
    name: "TabBarForm",
    components: {TabBarItem, TabBar},
    comments: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
