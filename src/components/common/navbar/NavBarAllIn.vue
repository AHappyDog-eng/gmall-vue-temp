<template>
  <div class="nav-bar-all-in">
    <div class="nav-bar-all-in-left"><slot name="nav-bar-all-in-left"></slot></div>
    <div class="nav-bar-all-in-center"><slot name="nav-bar-all-in-center"></slot></div>
    <div class="nav-bar-all-in-right"><slot name="nav-bar-all-in-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBarAllIn"
  }
</script>

<style scoped>
  @import "../../../assets/css/nav-bar/NavBarAllIn.css";
  @import "../../../assets/css/base.css";
</style>
