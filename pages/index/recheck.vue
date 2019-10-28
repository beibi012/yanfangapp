<template>
	<view class="recheck_comtainer">
		<view class="scc">
			<!-- css搜索框样式p317 -->
			<view class="search_cont" @click="toSearch">
			<view class="search_left">
				<image class="search_icon" src="/static/search@2x.png" mode="widthFix"></image>
			</view>
			<input class="search" type="text" value="" placeholder="请输入客户的电话号码" placeholder-style="color:#ccc;"/>
			<view class="search_right"></view>
		</view>
		</view>
		
		<!-- css公用部分//图标列表样式 p100 -->
		<navigator v-for="e in list" class="icon_container" :url="e.url" animation-type="pop-in" animation-duration="300">
			<image :style="load?'':'display: none;'" :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
	</view>
</template>

<script>
	export default{
		onReady(){
			this.load=true;
		},
		data(){
			return{
				load:false,
				headportrait:"",
				list:[
					{name:"新增问题",url:"newly/take_notes",src:"/static/Newproblems@2x.png"},
					{name:"问题列表",url:"recheck/problem_list",src:"/static/Listofquestions@2x.png"}
				]
				
			}
		},
		methods:{
			toSearch:()=>{
				uni.navigateTo({
					url:"search",
					animationType:"slide-in-bottom"
				})
			}
		}
	}
</script>

<style>
</style>
