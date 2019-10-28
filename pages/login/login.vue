<template>
	<view class="login_container">
		<!-- css p428 -->
		<image class="login_icon" src="../../static/190.jpg" mode="widthFix"></image>
			<text class="login_text">验房APP</text>
		
		<form action="" @submit="formSubmit"> 
			<view class="username_container">
				<image class="username_icon" src="/static/Accountnumber@2x.png" mode="widthFix"></image>
				<input name="username" class="username_input" type="text" placeholder="请输入企业账号" placeholder-style="color:rgba(255,255,255,0.5);">
			</view>
			<view class="password_container">
				<image class="password_icon" src="/static/Password@2x.png" mode="widthFix"></image>
				<input name="password" class="password_input" password="true" placeholder="请输入密码" placeholder-style="color:rgba(255,255,255,0.5);">
			</view>
			<button class="submit" type="primary" form-type="submit" @click="toWritinginfomation()" >登陆</button>
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
