<template>
	<!-- 搜索页面p617 -->
	<view class="search_container">
		<view class="app_top" style="height: 100upx;"></view>
		<view class="search_nav">
			<view class="top"></view>
			<navigator class="back" url="recheck" open-type="redirect">
				<image style="width: 25upx;height: 25upx;" src="/static/back.png" mode="widthFix"></image>
			</navigator>
			<view class="searchnav_container">
				<!-- 搜索框样式p317 -->
				<view class="search_cont">
				<view class="search_left">
					<image class="search_icon" src="/static/search@2x.png" mode="widthFix"></image>
				</view>
				<input class="search" type="number" value="" placeholder="请输入客户的电话号码" focus="true" placeholder-style="color:#ccc;"/>
				<view class="search_right"></view>
			</view>
			</view>
			<view class="search_button">搜索</view>
		</view>
			<!-- 搜索内容p708 -->
		<navigator class="search_content" v-for="problem in problemlist" :url="problem.url">
			<view class="developer">{{problem.developer}}</view>
			<view class="householder">{{problem.householder}}</view><view class="address">{{problem.address}}</view>
			<view class="checkitem">{{problem.main}}-{{problem.checkitem}}</view><view class="problem_content">{{problem.problem_content}}</view>
			<view class="date">{{problem.date}}</view><view class="time">{{problem.time}}</view>
		</navigator>

	</view>
</template>

<script>
	export default{
		data(){
			return{
				problemlist:[
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"search/details"},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"search/details"},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"search/details"},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"search/details"},
					{developer:"天健城",
					householder:"zhang先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"search/details"}
				]
			}
			
		}
	}
</script>

<style>
</style>
