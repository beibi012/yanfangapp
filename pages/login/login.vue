<template>
	<view class="login_container">
		<!-- css p428 -->
		<image class="login_icon" src="/static/fdc.png" mode="widthFix"></image>
			<text class="login_text">验房APP</text>
		
		<form action="" @submit="formSubmit"> 
			<view class="username_container">
				<image class="username_icon" src="/static/Accountnumber@2x.png" mode="widthFix"></image>
				<input name="username" class="username_input" type="text" value="admin" placeholder="请输入企业账号" placeholder-style="color:rgba(255,255,255,0.5);">
			</view>
			<view class="password_container">
				<image class="password_icon" src="/static/Password@2x.png" mode="widthFix"></image>
				<input name="password" class="password_input" password="true" value="admin123" placeholder="请输入密码" placeholder-style="color:rgba(255,255,255,0.5);">
			</view>
			<button class="submit" type="primary" form-type="submit" @click="toWritinginfomation()" >登陆</button>
		</form>
		
		<!-- <navigator class="login_forgetpassword" url="forget_password" animation-type="pop-in" animation-duration="300">忘记密码</navigator> -->
	</view>
</template>

<script>
	var self;
	export default{
		onLoad() {
			self=this;
		},
		data(){
			return{
				username:"",
				password:""
				
			}
		},
		methods:{
			toWritinginfomation:()=>{
				
			},
			formSubmit:(e)=>{
				uni.showLoading({
				    title: '登陆中',
					mask:true
				});
				const app = getApp()
				console.log(app.globalData.ctx)
				self.username=e.detail.value.username;
				self.password=e.detail.value.password;
				uni.request({
					url: app.globalData.ctx+'/login',
					header:{
						'Content-type':'application/x-www-form-urlencoded'
					},
					method: 'post',
					data: {
						"username": e.detail.value.username,
						"password": e.detail.value.password,
						"validateCode" : null,
						"rememberMe": false
					},
					success: res => {
						console.log(res)
						// #ifdef APP-PLUS
							let cookies=plus.navigator.getCookie(app.globalData.ctx);
							console.log(cookies)
							uni.setStorage({
							    key: 'cookies',
							    data: cookies,
							    success: function () {
							        console.log('获取cookies成功');
							    }
							});
						// #endif
						// #ifdef MP-WEIXIN
						let cookies=res.cookies[0].split(";")[0];
						console.log(cookies)
						uni.setStorage({
						    key: 'cookies',
						    data: cookies,
						    success: function () {
						        console.log('获取cookies成功');
						    }
						});
						// #endif
						
						
						if(res.data.code==0){
							uni.reLaunch({
								url: '../property_inspection/property_inspection',
								animationType:"pop-in",
								animationDuration:300,
								success: res => {
									console.log("企业账户填写完成，页面跳转")
									uni.showToast({
									    title: '登陆成功',
										icon:'success'
									});
									setTimeout(function(){
										uni.hideToast();
									},1000)
								}
							});
						}else{
							uni.showToast({
							    title: '用户不存在或密码错误',
								icon:'none'
							});
							setTimeout(function(){
								uni.hideToast();
							},1000)
						}
					},
					fail: () => { 
						console.log("数据请求错误")
						uni.showToast({
						    title: '数据请求错误',
							icon:'none'
						});
						setTimeout(function(){
							uni.hideToast();
						},1000)
					},
					complete: () => {
						uni.hideLoading()
					}
				});
			}
		}
	}
</script>

<style>
.login_container{
		width: 100%;
		height: 100vh;
		/*  background: url(static/login.png) no-repeat 0 0; */
		background-size: cover;
		background-image: linear-gradient(#00b4ff, #fff );
		}
		.login_icon{
				width: 30%;
				margin: 15% 35% 5% 35%;
			}
		.login_text{
				display: flex;
				justify-content: center;
				font-size: 1.5em;
				color: #fff;
			}
			
	
		//企业账号输入框
	.username_container{
		width: 550upx;
		border-bottom: #fff 1px solid;
		overflow: hidden;
		margin: 5% 100upx 0 100upx;
		padding-left: 2%;
		}
		.username_icon{
			display: inline-block;
			width: 50upx;
			height: 50upx;
			float: left;
			margin-right: 25upx;
			margin-bottom: 10upx;
		}
		.username_input{
			width: 450upx;
			display: inline-block;
			float: left;
			color: #fff;
			margin-top: 10upx;
		}
		//密码输入框
	.password_container{
		width: 550upx;
		border-bottom: #fff 1px solid;
		overflow: hidden;
		margin: 5% 100upx 0 100upx;
		padding-left: 2%;
		}
		.password_icon{
			display: inline-block;
			width: 50upx;
			height: 50upx;
			float: left;
			margin-right: 25upx;
			margin-bottom: 10upx;
		}
		.password_input{
			width: 450upx;
			float: left;
			display: inline-block;
			vertical-align: bottom;
			margin-top: 10upx;
		}
	//提交按钮
	.submit{
		width: 550upx;
		margin: 80upx 100upx 0 100upx;
		background-color: $button-color!important;
	}
	//忘记密码
	.login_forgetpassword{
		color:#4CB3F9;
		font-size: $font-size;
		margin-top: 10%;
		margin-left: 70%;
	}
	
</style>
