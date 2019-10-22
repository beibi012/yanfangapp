<template>
	<view class="feedback_container">
		<form @submit="feedback_submit">
			<text class="feedback_title">反馈</text>
			<textarea class="feedback" value="" name="feedback" />
			<button form-type="submit" type="primary" @click="navigateBack">提交</button>
		</form>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			feedback_submit:(e)=>{
				console.log(e)
			},
			navigateBack:()=>{
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
</style>
