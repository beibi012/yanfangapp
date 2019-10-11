<template>
	<view class="forget_container">
		<form action="">
			<view class="f_input">
				<image class="f_input_img" src="../../static/193.jpg" mode="widthFix"></image>
				<input class="cellphone_input" type="number" placeholder="请输入手机号">
			</view>
			<view class="f_input">
				<image class="f_input_img" src="../../static/196.jpg" mode="widthFix"></image>
				<input class="verificationcode_input" type="number" placeholder="请输入短信验证码">
				<button class="verificationcode_button" type="primary">获取验证码</button>
			</view>
			<view class="f_input">
				<image class="f_input_img" src="../../static/196.jpg" mode="widthFix"></image>
				<input class="newpassword_input" password="true" placeholder="请输入新密码">
			</view>
			<button class="forget_complete" type="primary">完成</button>
		</form>
		
	</view>
</template>

<script>
</script>

<style>
</style>
