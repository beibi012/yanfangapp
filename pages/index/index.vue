<template>
	<view class="personal_inspection">
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
		<navigator class="remind" url="remind">
			<image class="remind_icon" src="../../static/167.jpg" mode="widthFix"></image>
			<view class="remind_text">
				<view class="textlist"><text class="textcontent">xiao谢谢谢sadasdasdasdsa谢谢谢</text><text class="time">345小时前</text></view>
				<view class="textlist"><text class="textcontent">xiao谢谢谢sadasdasdasdsa谢谢谢</text><text class="time">345小时前</text></view>
			</view>
			<view class="unread_container">
				<text class="unread_text">15条未读</text>
				<text class="gt">&gt</text>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				headportrait:"",
				list:[
					{name:"新增",url:"newly",src:"../../static/131.jpg"},
					{name:"复查",url:"recheck",src:"../../static/126.jpg"}
				]
				
			}
		},
		methods:{
			toPersonal(){
				uni.navigateTo({
				    url: '../personal/personal'
				});
			},
			toLocation(){
				uni.navigateTo({
				    url: '../location/location'
				});
			}
		},
		onLoad() {
			 this.headportrait=getApp().globalData.navtop_headportrait;
			    
		}
	}
</script>

<style>
.login_containor{
	width: 100%;
	height: 100%;
}
.login_icon{
	width: 30%;
	margin: 15% 35% 5% 35%;
}
</style>