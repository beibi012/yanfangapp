<template>
	<view class="feedback_container">
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="feedback_submit">
					<view class="basic_container2">
					<text class="basic_title">反馈说明</text>
			<textarea class="textarea" value="" name="feedback" />
			<button class="submit" form-type="submit" type="primary" @click="navigateBack">提交</button>	
					</view>
		</form>
			</view>
		</scroll-view>
		
		
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
