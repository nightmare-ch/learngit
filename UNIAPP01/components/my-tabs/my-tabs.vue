<template>
  <view> </view>
</template>

<script>
export default {
  name: "my-tabs",
  props: {
    config: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  tabData: {
    type: Array,
    default: () => {
      return []; 
    }
  },
  defaultIndex:{
	  type:Number,
	  default:0
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
