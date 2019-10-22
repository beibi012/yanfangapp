<template>
	<view>
		<view class="app_top"></view>
		<!-- 顶部导航条 -->
		<view class="navtop">
			<navigator class="navtop_head" url="">
				<image src="../../static/166.jpg" mode="widthFix"></image>
			</navigator>
			<navigator class="navtop_location" url="">
				<view class="location_textc">
					<text>广西壮族自治区南宁市西乡塘区</text>
					</view>
				<image src="../../static/153.jpg" mode="widthFix"></image>
			</navigator>
		</view>
		<!-- 内容列表 -->
		<view class="pi_container">
			<navigator class="icon_container" v-for="e in list" :url="e.url" animation-type="pop-in" animation-duration="300">
			<image :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:"个人用户",url:"personal_user",src:"../../static/131.jpg"},
					{name:"开发商",url:"developers",src:"../../static/126.jpg"},
					{name:"工装",url:"uniform",src:"../../static/126.jpg"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
