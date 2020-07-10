<template>
  <div id="home">
    <nav-bar-all-in class="nav-home">
      <div slot="nav-bar-all-in-center">蘑菇街</div>
    </nav-bar-all-in>
    <div>{{result}}</div>
  </div>
</template>

<script>
  import NavBarAllIn from 'components/common/navbar/NavBarAllIn'
  /*用大括号是因为 getHomeMultiData 没有 module.export 如果导出了就不要用大括号*/
  import {getHomeMultiData} from 'network/home'

  export default {
    name: "Home",
    components: {NavBarAllIn},
    data() {
      return{
        banners: [],
        recommends:[]
      }
    },
    /*声明周期函数 组件创建完立即发送网络请求*/
    created() {
      /*小括号表示调用，.then() 拿到结果*/
      getHomeMultiData().then(res => {
        this.banners = res.data().banners;
        this.recommends = res.data().recommends
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
