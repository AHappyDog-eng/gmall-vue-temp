<template>
  <div id="home">
    <!--导航栏-->
    <nav-bar-all-in class="nav-home">
      <div slot="nav-bar-all-in-center">蘑菇街</div>
    </nav-bar-all-in>
   <swiper>
     <swiper-item v-for="item in banner">
       <a :href="item.link">
         <img :src="item.image">
       </a>
     </swiper-item>
   </swiper>
  </div>

</template>

<script>
  import NavBarAllIn from 'components/common/navbar/NavBarAllIn'
  /*用大括号是因为 getHomeMultiData 没有 module.export 如果导出了就不要用大括号*/
  import {getHomeMultiData} from 'network/home'
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "Home",
    components: {Swiper, NavBarAllIn,SwiperItem},
    data() {
      return {
        banner: [],
        recommend: [],
      }
    },
    methods: {

    },
    /*声明周期函数 组件创建完立即发送网络请求*/
    created() {
      /*小括号表示调用，.then() 拿到结果 异步函数*/
      getHomeMultiData().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(this.banner);
        console.log(res);
      })
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
    color: #fff;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  img {
    width: 100%;
    height: inherit;
  }
</style>
