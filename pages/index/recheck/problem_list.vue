<template>
	<view class="problemlist_container">
		<!-- 引用搜索页面 -->
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
					url:"../search/details"},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"../search/details"},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"../search/details"},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"../search/details"},
					{developer:"天健城",
					householder:"zhang先生",
					address:"八号楼3单元-2-201号uytuytutuuytgjyguyguyguyguytuy",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动igajsgjgfajhgfauhgfuas",
					date:"2019-9-26",
					time:"上午",
					url:"../search/details"}
				]
			}
			}
			}
</script>

<style>
</style>
