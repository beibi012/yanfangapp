<template>
	<view class="login_container">
		<image class="login_icon" src="../../static/190.jpg" mode="widthFix"></image>
			<text class="login_text">验房APP</text>
		
		<form action="" @submit="formSubmit">
			<view class="username_container">
				<image class="username_icon" src="../../static/193.jpg" mode="widthFix"></image>
				<input name="username" class="username_input" type="text" placeholder="请输入企业账号">
			</view>
			<view class="password_container">
				<image class="password_icon" src="../../static/196.jpg" mode="widthFix"></image>
				<input name="password" class="password_input" password="true" placeholder="请输入密码">
			</view>
			<button class="login_submit" type="primary" form-type="submit" @click="toWritinginfomation()" >提交</button>
		</form>
		
		<navigator class="login_forgetpassword" url="forget_password" animation-type="pop-in" animation-duration="300">忘记密码</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toWritinginfomation:()=>{
				uni.navigateTo({
					url: 'writing_infomation',
					animationType:"pop-in",
					animationDuration:300,
					success: res => {
						console.log("企业账户填写完成，页面跳转")
					},
					fail: () => {},
					complete: () => {}
				});
				
			},
			formSubmit:(e)=>{
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
