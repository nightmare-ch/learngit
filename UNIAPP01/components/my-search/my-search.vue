<template>
	<view class="my-search-container">
		<view class="my-search-box">
			<image class="icon" src="@/static/images/search.png"><image/>
			<text class="placeholder">placeholder</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.my-search-container {
  display: flex;
  align-items: center;

  .my-search-box {
    height: 36px;
	width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    border: 1px solid #c9c9c9;
    display: flex;
    align-items: center;
    padding: 0 10px;

    .icon {
      width: 20px;
      height: 20px;
    }

    .placeholder {
      font-size: 15px;
      margin-right: 5px;
      color: #454545;
    }
  }
}
</style>
