<template>
	<view class="writing_container">
		<form action="" @submit="formSubmit">
			<view class="winput_container">
				<text class="write_text" space="ensp">姓    名</text>
				<input name="name" class="writing_name w_input" type="text" placeholder="请输入您的姓名">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">账    号</text>
				<input name="id" class="writing_id w_input" type="text" placeholder="请输入您的账号">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">手    机</text>
				<input name="cell" class="writing_cell w_input" type="number" placeholder="请输入手机号码">
			</view>
			<view class="winput_container">
				<text class="write_text" space="ensp">岗    位</text>
				<input name="post" class="writing_post w_input" type="text" placeholder="请输入岗位名称">
			</view>
			<view class="winput_container">
				<text class="write_text w_input" space="ensp">所在部门</text>
				<input name="department" class="writing_department" type="text" placeholder="请输入所属部门">
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
					url: '../property_inspection/property_inspection',
					animationType:"pop-in",
					animationDuration:300,
					success: res => {console.log("填写资料完成，跳转成功")},
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
