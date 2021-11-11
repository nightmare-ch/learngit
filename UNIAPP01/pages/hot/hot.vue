<template>
  <!-- wxml -->
  <view class="hot-container">
    <!-- @符号相当于当前项目的根目录 -->
    <img class="logo" src="@/static/images/logo.png" alt="" mode="aspectFit" />
    <!-- aspectFit意思是自动变化大小/取消拉伸效果 -->
    <my-search></my-search>
  </view>
</template>

<script>
// js

import { getHotTabs } from "api/hot";

export default {
  data() {
    return {};
  },
  methods: {
    async loadHotTabs() {
      const res = await getHotTabs();
      console.log(res);
    },
  },

  created(){
	  this.loadHotTabs();
  }
};
</script>

<style lang="scss" scoped>
// wxss
//scoped表示当前样式只在当前组件中生效---实现样式隔离
.hot-container {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 80px;
  }
  .search-box {
    padding: 0 16px;
    margin-bottom: 8px;
  }
}
</style>
