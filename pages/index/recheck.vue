<template>
	<view class="recheck_comtainer">
		<view class="scc">
			<!-- css搜索框样式p317 -->
			<view class="search_cont">
			<view class="search_left">
				<image class="search_icon" src="../../static/167.jpg" mode="widthFix"></image>
			</view>
			<input class="search" type="number" value="" placeholder="请输入客户的电话号码" @focus="toSearch"/>
			<view class="search_right"></view>
		</view>
		</view>
		
		<!-- css公用部分//图标列表样式 p100 -->
		<navigator class="icon_container" v-for="e in list" :url="e.url">
			<image :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				headportrait:"",
				list:[
					{name:"新增问题",url:"newly/take_notes",src:"../../static/131.jpg"},
					{name:"问题列表",url:"recheck/problem_list",src:"../../static/126.jpg"}
				]
				
			}
		},
		methods:{
			toSearch:()=>{
				uni.navigateTo({
					url:"search"
				})
			}
		}
	}
</script>

<style>
</style>
