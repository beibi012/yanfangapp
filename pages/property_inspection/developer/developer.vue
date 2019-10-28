<template>
<view>
	<!-- 公用样式导航条 -->
	<view class="app_top"></view>
	<view class="normal_nav">
		<view class="top"></view>
		<navigator class="left" open-type="navigateBack">返回</navigator>
		<view class="title">{{title}}</view>
		<view class="right"></view>
	</view>
	<view>
		<navigator v-for="e in list" class="icon_container" :url="e.url" animation-type="pop-in" animation-duration="300">
			<image :style="load?'':'display: none;'" :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
		</navigator>
	</view>
</view>
</template>

<script>
	export default{
		onLoad(e) {
			this.title=e.name;
		},
		onReady() {
			this.load=true;
		},
		data(){
			return{
				load:false,
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
