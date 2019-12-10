<template>
	<!-- 任务详情样式p605 -->
	<view>
		<view class="remind_details">
			<view>
				任务名称：
			</view>
			
			<view>
				面积(㎡)：
			</view>
			<view>
				验房时间：
			</view>
			<view>
				房屋类型：
			</view>
			<view>
				业主姓名：
			</view>
			<view>
				联系方式：
			</view>
			<view>
				订单收费信息：
			</view>
			<view>
				应收：
			</view>
			<view>
				验房师：
			</view>
		</view>
		<button type="primary" @click="toNewly">开始任务</button>
	</view>
	
</template>

<script>
	export default{
		onLoad(e) {
			console.log(e)
			this.e_data=e;
			console.log(this.e_data)
			
		},
		data(){
			return{
				e_data:[]
			}
		},
		methods:{
			toNewly:()=>{
				uni.redirectTo({
					url:'../newly/basic_information'
				})
			}
		}
	}
</script>

<style>
	.remind_details{
		width: 96%;
		border: 1px solid #ddd;
		border-radius: 10upx;
		margin: 2% 2%;
		color: #333;
		}
		.remind_details view{
			margin-left: 5%;
			height: 60upx;
			margin-top: 2%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
</style>
