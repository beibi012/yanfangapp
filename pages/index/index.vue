<template>
	<view class="personal_inspection">
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
		<view class="pi_container">
			<navigator class="icon_container" url="">
			<image src="../../static/131.jpg" mode="widthFix"></image>
			<text>个人信息</text>
		</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				headportrait:"",
				pi_list:[
					{name:"个人信息",url:"",src:""}
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
			 console.log(this.headportrait)
			    
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