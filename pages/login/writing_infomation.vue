<template>
	<view class="writing_container">
		<form action="" @submit="formSubmit">
			<view class="winput_container">
				<text class="write_text" space="ensp">姓    名</text>
				<input name="name" class="w_input" type="text" placeholder="请输入您的姓名" placeholder-style="color:#ddd;">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">账    号</text>
				<input name="id" class="w_input" type="text" placeholder="请输入您的账号" placeholder-style="color:#ddd;">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">手    机</text>
				<input name="cell" class="w_input" type="number" placeholder="请输入手机号码" placeholder-style="color:#ddd;">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">岗    位</text>
				<input name="post" class="w_input" type="text" placeholder="请输入岗位名称" placeholder-style="color:#ddd;">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">所在部门</text>
				<input name="department" class=" w_input" type="text" placeholder="请输入所属部门" placeholder-style="color:#ddd;">
			</view>
			
			
			<button class="write_complete" type="primary" form-type="submit" @click="landing()">确定</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			landing:()=>{
				uni.reLaunch({
					url: '../index/index',
					animationType:"pop-in",
					animationDuration:300,
					success: res => {console.log("填写资料完成，跳转成功")},
					fail: () => {},
					complete: () => {}
				});
			},
			formSubmit:(e)=>{
				console.log(e)
				// uni.request({
				// 	url: 'http://192.168.0.111:8080/login',
				// 	method: 'post',
				// 	data: {
				// 		 "username": username,
				// 		"password": password,
				// 		"validateCode" : validateCode,
				// 		"rememberMe": rememberMe
				// 	},
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
			}
		}
	}
</script>

<style>
//填写资料页面样式
		.writing_container{
			width: 100%;
			.winput_container{
				width: 100%;
				border-bottom: #ddd 1px solid;
				overflow: hidden;
				padding: 2%;
				height: 70upx;
				.write_text{
					display: inline-block;
					height: 40upx;
					float: left;
					width: 25%;
					text-align: center;
					color: #666;
					margin: 10upx 0 15upx 0;
				}
				.w_input{
					display: inline-block;
					height: 40upx;
					float: left;
					margin: 10upx 0 15upx 50upx;
				}
			}
				.write_complete{
					background-color: $button-color;
					width: 550upx;
					margin-top: 80upx;
				}
		}
	
	
</style>
