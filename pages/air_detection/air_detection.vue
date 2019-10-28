<template>
	<view>
		<view class="app_top"></view>
		<!-- 顶部导航条 -->
		<view class="navtop">
			<view class="top"></view>
			<navigator class="navtop_head" url="../personal/setting">
				<image :src="portrait" mode="aspectFill"></image>
			</navigator>
			<navigator class="navtop_location" url="../location/location">
				<view class="location_textc">
					<text>{{city}}</text>
					</view>
				<image src="../../static/153.jpg" mode="widthFix"></image>
			</navigator>
		</view>
		<!-- 内容列表 -->
		<view class="pi_container">
			<navigator v-for="e in list" class="icon_container" :url="e.url">
				<image :style="load?'':'display: none;'" :src="e.src" mode="widthFix"></image>
				<text>{{e.name}}</text>
			</navigator>
			
			</navigator>
		</view>
	</view>
</template>

<script>
	var self;
	export default {
		onLoad() {
			self=this;
		},
		onReady() {
			this.load=true;
		},
		onShow() {
			self=this;
			uni.getStorage({
			    key: 'portrait',
			    success: function (res) {
			       self.portrait= res.data;
			    }
			});
			uni.getStorage({
			    key: 'city',
			    success: function (res) {
			            self.city= res.data;
			        }
			});
		},
		data() {
			return {
				load:false,
				city:"",
				portrait:"../../static/166.jpg",
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
