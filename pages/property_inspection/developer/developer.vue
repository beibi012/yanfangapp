<template>
<view>
	<!-- 公用样式导航条 -->
	<view class="app_top"></view>
	<view class="normal_nav">
		<navigator class="left" open-type="navigateBack">返回</navigator>
		<view class="title">{{title}}</view>
		<view class="right"></view>
	</view>
	<view>
		<navigator class="icon_container" v-for="e in list" :url="e.url" animation-type="pop-in" animation-duration="300">
			<image :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
	</view>
</view>
</template>

<script>
	export default{
		onLoad(e) {
			this.title=e.name;
		},
		data(){
			return{
				title:"",
				list:[
					{name:"模拟验房",url:"simulate/simulate",src:"../../../static/131.jpg"},
					{name:"专项检查",url:"all_flats/all_flats",src:"../../../static/126.jpg"}
				]
			}
		}
	}
</script>

<style>
</style>
