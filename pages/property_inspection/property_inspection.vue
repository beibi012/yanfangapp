<template>
	<!-- 公用样式导航条 -->
	<view class="property_inspection">
		<view class="app_top"></view>
		<view class="navtop">
			<view class="top"></view>
			<navigator class="navtop_head" url="../personal/setting">
				<image :src="portrait" mode="aspectFill"></image>
			</navigator>
			<navigator class="navtop_location" url="../location/location">
				<view class="location_textc">
					<text>{{city}}</text>
					</view>
				<image src="/static/Location@2x.png" mode="widthFix"></image>
			</navigator>
		</view>
		<!-- 开发商列表p920 -->
		<view v-for="(e,index) in developer">
			<navigator class="developer" :url="'developer/simulate/simulate?PrId='+developer[index].prId">
			<image class="developer_icon" src="../../static/fdc.png" mode="widthFix"></image>
			<view class="developer_name">{{e.prName}}</view>
		</navigator>
		</view>
		<!-- <view >//测试
			<navigator class="developer" url="developer/simulate/simulate">
			<image class="developer_icon" src="../../static/fdc.png" mode="widthFix"></image>
			<view class="developer_name">万科</view>
		</navigator>
		</view> -->
		
	</view>
</template>

<script>
var self;
	export default {
		onLoad() {
			self=this;
			
			uni.getStorage({
			    key: 'province',
			    success: function (res) {
			            self.province= res.data;
			        }
			});
			uni.getStorage({
			    key: 'city',
			    success: function (res) {
			            self.city= res.data;
			        }
			});
			uni.getStorage({
			    key: 'district',
			    success: function (res) {
			            self.district= res.data;
			        }
			});
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			
			
		},
		onShow() {
			self=this;
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
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
			self.developer=[]
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemlist?prClass=1',
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
					console.log(self.getData)
					// for (var i = 1; i < res.data.length; i++) {
					// 	self.developer.push(res.data[i])
					// }
					for (var i = 0; i < res.data.rows.length; i++) {
						self.developer.push(res.data.rows[i])
					}
					console.log(JSON.stringify(self.developer))
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading()
				}
			});
			
		},
		data() {
			return {
				getData:[],
				cookies:"",
				portrait:"/static/tx.png",
				developer:[],
				province:"",
				city:"",
				district:""
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
