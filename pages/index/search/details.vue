<template>
	<!-- 每套房子问题筛选页面815 -->
	<view class="details_content">
<!-- 顶部导航条 -->
		<view class="app_top"></view>
		<view class="normal_nav">
			<view class="top"></view>
			<navigator class="left" open-type="navigateBack">返回</navigator>
			<view class="title">{{title}}</view>
			<view class="right"></view>
		</view>
		<scroll-view scroll-y="true" >
			<view>
				<view class="picker_container">
							<picker :range="person" @change="changePerson">
								<view class="picker">{{person[index1]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
								</view>
							</picker>
							<picker :range="main" @change="changeMain">
								<view class="picker">{{main[index2]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
							<picker :range="item" @change="changeItem">
								<view class="picker">{{item[index3]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
						</view>
				<!-- 新增问题 -->
						<view class="newly_problem">
							<navigator class="newly_botton" url="../newly/take_notes">新增问题</navigator>
							</view>
							<view class="img_container">
								<image class="img" src="../../../static/1.jpeg" mode="widthFix"></image>
							</view>
				<!-- 问题列表 -->
							<scroll-view class="problemlist" scroll-y="true">
								<navigator class="problem":url="e.url+'?changed='+e.changed" v-for="(e,index) in problemlist" @click="getIndex(index)">
									<view class="color"></view>
									<view class="main_item">{{e.main}}-{{e.checkitem}}</view>
									<view class="problem_content"><text class="text">{{e.problem_content}}</text></view>
									<view class="date">{{e.date}}-{{e.time}}</view>
									<view class="sate">
										<view :class="e.statedot"></view>
										<text>{{e.statetext}}</text>
									</view>
								</navigator>
							</scroll-view>
			</view>
		</scroll-view>
		<view class="progress_container">
			<view class="progress">
			<view class="text">
				整改进度
			</view>
			 <progress percent="80" show-info="true" />
		</view>
		</view>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad() {
			self=this;
			uni.$on('state',(data)=>{
				self.problemlist[self.problemindex].changed=data.changed;
				if(self.problemlist[self.problemindex].changed==1){
					self.problemlist[self.problemindex].statetext="已整改";
					self.problemlist[self.problemindex].statedot="blackdot";
				}
				
			})
		},
		data(){
			return{
				title:"8-2-201",
				person:["徐xx","赵xx"],
				index1:0,
				main:["客厅","厨房","主卧","次卧"],
				index2:0,
				item:["插座","天花板","墙壁","门框","窗口"],
				index3:0,
				problemindex:-1,
				problemlist:[
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"problem_details",
					statetext:"未整改",
					changed:0,
					statedot:"reddot"
					},
					{developer:"万科城",
					householder:"zhang先生",
					address:"19号楼3单元-5-505号",
					main:"厨房",
					checkitem:"窗口",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-5-26",
					time:"上午",
					url:"problem_details",
					statetext:"已整改",
					changed:1,
					statedot:"greendot"
					},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"problem_details",
					statetext:"未整改",
					changed:0,
					statedot:"reddot"
					},
					{developer:"万科城",
					householder:"zhang先生",
					address:"19号楼3单元-5-505号",
					main:"厨房",
					checkitem:"窗口",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-5-26",
					time:"上午",
					url:"problem_details",
					statetext:"已整改",
					changed:1,
					statedot:"greendot"
					},
					{developer:"天健城",
					householder:"王先生",
					address:"八号楼3单元-2-201号",
					main:"客厅",
					checkitem:"插座",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-9-26",
					time:"上午",
					url:"problem_details",
					statetext:"未整改",
					changed:0,
					statedot:"reddot"
					},
					{developer:"万科城",
					householder:"zhang先生",
					address:"19号楼3单元-5-505号",
					main:"厨房",
					checkitem:"窗口",
					problem_content:"表面污染、刮花、破损，插排面板松动",
					date:"2019-5-26",
					time:"上午",
					url:"problem_details",
					statetext:"已整改",
					changed:1,
					statedot:"greendot"
					}
				]
				
			}
		},
			methods:{
				changePerson:(e)=>{
					self.index1=e.detail.value;
				},
				changeMain:(e)=>{
					self.index2=e.detail.value;
				},
				changeItem:(e)=>{
					self.index3=e.detail.value;
				},
				getIndex:(index)=>{
					self.problemindex=index;
					console.log(self.problemindex)
				}
			}
	}
</script>

<style>
</style>
