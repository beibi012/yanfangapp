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
				<image src="../../static/153.jpg" mode="widthFix"></image>
			</navigator>
		</view>
		<!-- 开发商列表p920 -->
		<view v-for="e in developer">
			<navigator class="developer" :url="'developer/developer?name='+e.name">
			<image class="developer_icon" src="../../static/169.jpg" mode="widthFix"></image>
			<view class="developer_name">{{e.name}}</view>
		</navigator>
		</view>
		
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
				portrait:"../../static/166.jpg",
				developer:[
					{name:"万科城",img:"",url:""},
					{name:"精通瑞城",img:"",url:""},
					{name:"天健城",img:"",url:""}
				],
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
