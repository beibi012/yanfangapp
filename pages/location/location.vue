<template>
	<view>
		<view class="scc">
			<!-- css搜索框样式p317 -->
			<view class="search_cont">
			<view class="search_left">
				<image class="search_icon" src="../../static/search@2x.png" mode="widthFix"></image>
			</view>
			<input class="search" type="text"  placeholder="城市/拼音" />
			<view class="search_right"></view>
		</view>
		</view>
		<!-- 当前定位 -->
		<view class="newlocation">
			<view class="up">当前定位</view>
			<view class="down">
				<image class="img" src="/static/sign@2x.png" mode="widthFix"></image>
				<view class="left"><text>{{current_city}}{{current_district}}{{current_street}}</text></view>
				<view class="right" @click="relocation">重新定位</view>
			</view>
		</view>
		<view class="newlocation">
			<view class="up">定位/最近访问</view>
			<view class="down">
				<view class="city" ><text>南宁</text></view>
			</view>
		</view>
		<view class="newlocation">
			<view class="up">热门城市</view>
			<view class="down">
				<view class="city" v-for="city in hotcity"><text>{{city}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
var self;
	export default {
		onLoad() {
			self=this;
		},
		data() {
			return {
				hotcity:["桂林","柳州","崇左","玉林","呼和浩特","深圳","钦州","广州","上海",
				],
				current_city:"南宁市",
				current_district:"",
				current_street:"",
			}
		},
		methods: {
			relocation:function(){
				uni.removeStorage({
				    key: 'city',
				    success: function () {}
				});
				uni.removeStorage({
				    key: 'district',
				    success: function () {}
				});
				uni.removeStorage({
				    key: 'street',
				    success: function () {}
				});
				uni.getLocation({
					type:"gcj02",
					geocode:true,
					success: function (res) {
						// console.log('国家：' + res.address.country);
						//console.log('省份：' + res.address.province);
						// console.log('城市：' + res.address.city);
						// console.log('区/县：' + res.address.district);
						// console.log('街道：' + res.address.street);
						uni.setStorage({
							key: 'city',
							data: res.address.city
						});
						uni.getStorage({
							key: 'city',
							success: function (res) {
									self.current_city= res.data;
								}
						});
						uni.setStorage({
							key: 'district',
							data: res.address.district
						});
						uni.getStorage({
							key: 'district',
							success: function (res) {
									self.current_district= res.data;
								}
						});
						uni.setStorage({
							key: 'street',
							data: res.address.street
						});
						uni.getStorage({
							key: 'street',
							success: function (res) {
									self.current_street= res.data;
								}
						});
						uni.showToast({
						    title: '重新定位完成'
						});
					    }
				});
			},
			toTest:()=>{
				uni.navigateTo({
					url: 'test',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
