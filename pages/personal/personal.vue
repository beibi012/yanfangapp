<template>
	<view class="personal">
		<view class="basic_container" @click="clickPortrait">
			<text class="basic_title">头像</text>
				<text class="right">&gt</text>
				<image class="portrait" :src="portrait" mode="aspectFill"></image>
		</view>
		<view class="basic_container">
			<text class="basic_title">名字</text>
			<text class="basic_content">陈志诚</text>
		</view>
		<view class="basic_container">
			<text class="basic_title">电话</text>
			<text class="basic_content">13900001111</text>
		</view>
		<view class="basic_container">
			<text class="basic_title">单元房号</text>
			<text class="basic_content">8号楼5-501</text>
		</view>
	</view>
</template>

<script>
	var self;
	export default {
		onLoad() {
			self=this;
		},
		onShow() {
			self=this;
			uni.getStorage({
			    key: 'portrait',
			    success: function (res) {
					console.log(res.data)
			       self.portrait= res.data;
			    }
			});
		},
		data() {
			return {
				portrait:"../../static/166.jpg",
				p:["../../static/166.jpg"]
			}
		},
		methods: {
			clickPortrait:()=>{
				uni.showActionSheet({
				    itemList: ['查看头像大图', '从相册选取'],
				    success: function (res) {
				        if(res.tapIndex==0){
							self.p[0]=self.portrait;
							uni.previewImage({
								urls: self.p
							        });
						}
						if(res.tapIndex==1){
							console.log("选择照片")
							uni.chooseImage({
							    count: 1,
							    success: function (res) {
							        self.portrait= res.tempFilePaths[0];
									uni.setStorage({
										key: 'portrait',
										data: res.tempFilePaths[0],
										success: function (data) {
											console.log(data);
										}
									});
							    }
							});
						}
				    }
				});

			}
		}
	}
</script>

<style>

</style>
