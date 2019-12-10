<template>
	<!-- 模拟验房样式p949 -->
	<view class="simulate_container">
		<view class="web_title"> 
			<view class="nav" :class="ac==true?'active':''"  @click="clickSimulate">模拟验房</view>
			<view class="nav" :class="ac==true?'':'active'"  @click="clickItem">专项检查</view>
		</view>
		<view class="kong">
			
		</view>
		
			<view class="one" :style="change">
				<scroll-view scroll-y="true" class="half">
				
				<navigator class="simulate_list" v-for="(e,index) in flatslist" :url="'all_states?psId='+getData[index].psId+'&psName='+e.psName">
				<view class="list_content">{{e.psName}}</view>
				<!-- <view class="list_button"></view> -->
			</navigator>
			
			</scroll-view>
			<scroll-view scroll-y="true" class="half">
				<navigator class="simulate_list" v-for="(e,index) in flatslist" :url="'../all_flats/all_states?psId='+getData[index].psId+'&psName='+e.psName">
				<view class="list_content">{{e.psName}}</view>
				<!-- <view class="list_button"></view> -->
			</navigator>
			</scroll-view>
			</view>
		
			
		
		
		
		
	</view>
</template> 

<script>
	var self
	export default{
		onLoad(e) {
			self=this;
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
			console.log(e)
			
			for (let i in e) {
				console.log(e[i])
				self.prId=e[i];
			}
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemsonList?prId='+self.prId,
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
				},
				success: res => {
					console.log(res)
					self.getData=res.data.rows
					console.log(JSON.stringify(self.getData))
					for (var i = 0; i < res.data.rows.length; i++) {
						let obj={}
						obj.psName= res.data.rows[i].psName
						console.log(obj)
						self.flatslist.push(obj)
					}
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading()
				}
			});
		},
		onShow() {
			
		},
		data(){
			return{
				prId:"",
				getData:[],
				ac:true,
				change:"left:0upx;transition:0.3s;",
				flatslist:[],
				// flatslist:[
				// 	{number:8,unit:1,button:"上传"},
				// 	{number:8,unit:2,button:"下载"},
				// 	{number:8,unit:3,button:"上传"},
				// 	{number:8,unit:4,button:"上传"},
				// 	{number:9,unit:1,button:"上传"},
				// 	{number:9,unit:2,button:"上传"},
				// 	{number:9,unit:3,button:"上传"},
				// 	{number:9,unit:4,button:"上传"},
				// 	{number:8,unit:1,button:"上传"},
				// 	{number:8,unit:2,button:"下载"},
				// 	{number:8,unit:3,button:"上传"},
				// 	{number:8,unit:4,button:"上传"},
				// 	{number:9,unit:1,button:"上传"},
				// 	{number:9,unit:2,button:"上传"},
				// 	{number:9,unit:3,button:"上传"},
				// 	{number:9,unit:4,button:"上传"}
				// ]
			}
		},
		methods:{
			clickSimulate:()=>{
				self.ac=true;
				self.change="left:0upx;transition:0.3s;",
				console.log("aaa")
			},
			clickItem:()=>{
				self.ac=false;
				self.change="left:-750upx;transition:0.3s;",
				console.log("bbb")
			}
		}
	}
</script>

<style>
	.simulate_container{
		width: 750upx;
		overflow: hidden;
		}
		.one{
			position: relative;
			width: 1550upx;
		}
		.half{
			display: inline-block;
			width: 750upx;
			float: left;
		}
		.web_title{
			background-color: #fff;
			position: fixed;
			top: 0;
			height: 8vh;
			width: 750upx;
			white-space: nowrap;
			z-index: 100;
		}
		.kong{
			height: 8vh;
			width: 750upx;
		}
		.active{
			color: #333!important;
			border-bottom: #00B4FF solid 5upx!important;
		}
		.nav{
			display: inline-block;
			width: 373upx;
			height: 8vh;
			line-height: 8vh;
			text-align: center;
			color: #999;
			border: 1px solid #ddd;
		}
		.simulate_list{
			height: 120upx;
			border: 1px solid #ddd;
			color: #666;
			}
			.list_content{
				display: inline-block;
				width: 75%;
				font-size: 35upx;
				margin: 38upx 2% 0 2%;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				float: left;
			}
			.list_button{
				display: inline-block;
				width: 12%;
				height: 60upx;
				line-height: 60upx;
				float: left;
				font-size: 30upx;
				margin: 30upx 0 0 4%;
				text-align: center;
				background-color: #f3ad3d;
				color: #fff;
				border-radius: 10upx;
				vertical-align: bottom;
				
			}
</style>
