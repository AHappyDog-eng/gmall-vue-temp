<template>
  <div id="home">
    <nav-bar-all-in class="nav-home">
      <div slot="nav-bar-all-in-center">蘑菇街</div>
    </nav-bar-all-in>
    <div class="nav-swiper">
      <el-carousel indicator-position="outside" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="item in banner" :key="item">
          <!--link -->
          <a :href="item.link">
            <img :src="item.image"/>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
  import NavBarAllIn from 'components/common/navbar/NavBarAllIn'
  /*用大括号是因为 getHomeMultiData 没有 module.export 如果导出了就不要用大括号*/
  import {getHomeMultiData} from 'network/home'

  export default {
    name: "HomeEmUi",
    components: {NavBarAllIn},
    data() {
      return {
        banner: [],
        recommend: [],
        bannerHeight: 5000,
        // 浏览器宽度
        screenWidth: 0,
      }
    },
    methods: {
      setSize() {
        // 通过浏览器宽度(图片宽度)计算高度
        this.bannerHeight = 900 / 1920 * this.screenWidth;
      }
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
      // 页面解析成html页面后进行 dom调节
      // 首次加载时,需要调用一次
      this.screenWidth = window.innerWidth;
      this.setSize();
      // 窗口大小发生改变时,调用一次
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
        this.setSize();
      }
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
