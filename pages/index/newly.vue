<template>
	<view>
		<!-- css公用部分//图标列表样式 p100 -->
		<view class="pi_container">
			<navigator class="icon_container" v-for="e in list" :url="e.url">
			<image :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				headportrait:"",
				list:[
					{name:"个人信息",url:"newly/basic_information",src:"../../static/131.jpg"},
					{name:"实测实量",url:"newly/measure",src:"../../static/126.jpg"},
					{name:"登记问题",url:"newly/take_notes",src:"../../static/131.jpg"},
					{name:"反馈",url:"newly/feedback",src:"../../static/126.jpg"}
				]
				
			}
		}
	}
</script>

<style>
</style>
