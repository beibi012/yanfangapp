<template>
	<view>
		<view class="setting">
			<navigator class="center" url="personal">
				<view>
					<image :src="portrait" mode="aspectFill"></image>
				</view>
				<view class="name">陈志诚</view>
				<view class="profession">万科城验房师</view>
			</navigator>
		</view>
		<navigator class="about" url="about">
			 <text>关于验房APP</text>
			 <text class="right">&gt</text>
		</navigator>
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
				portrait:"/static/tx.png",
				p:"../../static/166.jpg"
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
