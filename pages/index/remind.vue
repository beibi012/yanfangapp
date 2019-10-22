<template>
	<!-- 任务提醒样式p565 -->
	<view class="remind_container">
		<navigator class="task" :url="'remind/remind_details?date='+e.date+'&number='+e.number" v-for="e in tasklist">
			<view>小区名称：{{e.name}}</view>
			<view>房号：{{e.number}}</view>
			<view>验房时间：{{e.date}}</view>
			<view class="details">
				<text>查看详情</text> 
				<view class="gt">&gt</view>
				</view>
		</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tasklist:[
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2016-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2017-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2018-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2020-06-06",data:""}
					
				]
			}
		}
	}
</script>

<style>
</style>
