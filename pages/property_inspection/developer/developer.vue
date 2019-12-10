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
	var self;
	export default{
		onLoad(e) {
			self=this;
			this.title=e.name;
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
				url: app.globalData.ctx+'/home/problem/rs/dictDataList?dictType=problem_son_flag',
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				// data: {
				// 	"dictType":"problem_son_decorate"
				// },
				success: res => {
					console.log(res)
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onReady() {
			this.load=true;
		},
		data(){
			return{
				load:false,
				title:"",
				list:[
					{name:"模拟验房",url:"simulate/simulate",src:"/static/Simulatedroominspection@2x.png"},
					{name:"专项检查",url:"all_flats/all_flats",src:"/static/Specialinspection@2x.png"}
				]
			}
		}
	}
</script>

<style>
</style>
