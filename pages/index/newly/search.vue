<template>
	<!-- 搜索页面p617 -->
	<view class="search_container">
		<view class="app_top" style="height: 100upx;"></view>
		<view class="search_nav">
			<view class="top"></view>
			<navigator class="back"  open-type="navigateBack">
				<image style="width: 25upx;height: 25upx;" src="/static/back.png" mode="widthFix"></image>
			</navigator>
			<view class="searchnav_container">
				<!-- 搜索框样式p317 -->
				<view class="search_cont">
				<view class="search_left">
					<image class="search_icon" src="/static/search@2x.png" mode="widthFix"></image>
				</view>
				<input class="search" type="number" value="" placeholder="请输入客户的电话号码"  placeholder-style="color:#ccc;"/>
				<view class="search_right"></view>
			</view>
			</view>
			<view class="search_button">搜索</view>
		</view>
			<!-- 搜索内容p708 -->
			<view>
				<view class="search_cont" v-for="company in companys" @click="choiceCompany(company)">
					<view class="black">{{company}}</view>
					<view class="grey">{{company}}</view>
				</view>
			</view>
		

	</view>
</template>

<script>
	export default{
		data(){
			return{
				companys:[
					"深圳xxxx有限公司11",
					"深圳xxxx有限公司12",
					"深圳xxxx有限公司13",
					"深圳xxxx有限公司14",
					"深圳xxxx有限公司25",
					"深圳xxxx有限公司26",
					"深圳xxxx有限公司27",
					"深圳xxxx有限公司28",
				]
			}
			
		},
		methods:{
			choiceCompany:(e)=>{
				console.log(e)
				uni.$emit('company',{msg:e})
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.search_cont{
		height: 8vh;
		width: 100%;
		font-size: 35upx;
		
	}
	.search_cont .black{
		height: 4vh;
		width: 100%;
		
		line-height: 4vh;
	}
</style>
