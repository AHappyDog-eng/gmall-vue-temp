<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-blue"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    data() {
      return {
       /* isActive: true*/
      }
    },
    computed: {
      isActive(){
        // 计算活跃路由的route的path 是不是 和传入path的相同
        return !this.$route.path.indexOf(this.path)
      }
    },
    methods: {
      itemClick() {
        /*可以返回用push 不可以返回用replace*/
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/home.css";
</style>
