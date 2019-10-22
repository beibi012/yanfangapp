<template>
	<!-- 任务详情样式p605 -->
	<view class="remind_details">
		<view>
			验房日期：{{e_data.date}}
		</view>
		<view>
			小区名称：
		</view>
		<view>
			房号：{{e_data.number}}
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
		}
	}
</script>

<style>
</style>
