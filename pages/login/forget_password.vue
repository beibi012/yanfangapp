<template>
	<view class="forget_container">
		<form action="" @submit="formSubmit" >
			<view class="f_input">
				<image class="f_input_img" src="/static/Mobilephone@2x.png" mode="widthFix"></image>
				<input name="cellphone" class="forget_input" type="number" placeholder="请输入手机号" placeholder-style="color:rgba(155,155,155,0.5);">
			</view>
			<view class="f_input">
				<image class="f_input_img" src="/static/VerificationCode@2x.png" mode="widthFix"></image>
				<input name="verificationcode" class="forget_input" type="number" placeholder="请输入短信验证码" placeholder-style="color:rgba(155,155,155,0.5);">
				<button class="verificationcode_button" type="primary">获取验证码</button>
			</view>
			<view class="f_input">
				<image class="f_input_img" src="/static/Newpassword@2x.png" mode="widthFix"></image>
				<input name="newpassword" class="forget_input" password="true" placeholder="请输入新密码" placeholder-style="color:rgba(155,155,155,0.5);">
			</view>
			<button class="forget_complete" type="primary" form-type="submit">完成</button>
		</form>
		
	</view>
</template>

<script>
	export default{
		methods:{
			formSubmit:(e)=>{
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
