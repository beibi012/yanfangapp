<template>
	<view>
		<view class="app_top">
			
		</view>
		<view class="normal_nav">
			<navigator class="left" open-type="navigateBack">返回</navigator>
			<view class="title">{{title.number}}号楼房间-{{title.unit}}单元</view>
			<view class="right"></view>
		</view>
		<view class="states">
			<view class="state" v-for="s in states" :style="'background-color:'+s.bgcolor+';'">
				<view>{{s.state}}</view>
				<view>({{s.number}})</view>
			</view>
		</view>
		<view class="storeys" v-for="storey in storeys">
			<view class="storey">第{{storey}}楼</view>
			<view class="number_container">
				<navigator class="storey_number" v-for="n in storey_numbers" url="details" :class="n.state">{{storey}}0{{n.number}}</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(e) {
			self=this;
			this.title=e
			console.log(this.title)
			this.states[1].number=90;
			self.states[2].number=6;
			self.states[3].number=6;
			self.states[4].number=6;
			self.states[0].number=self.states[1].number+self.states[2].number+self.states[3].number+self.states[4].number;
		},
		data(){
			return{
				title:{},
				states:[
					{state:"全部",number:0,bgcolor:"#fff"},
					{state:"待交付",number:0,bgcolor:"#fff"},
					{state:"待整改",number:0,bgcolor:"#ddd"},
					{state:"已整改",number:0,bgcolor:"#bbb"},
					{state:"已交付",number:0,bgcolor:"#999"},
				],
				storeys:[1,2,3,4,5,6,7,8,9],
				storey_numbers:[
					{number:1,state:"delivered"},
					{number:2,state:"undelivered"},
					{number:3,state:"changed"},
					{number:4,state:"nochange"}
					]
			}
		},
		computed:{
			total(){
				return self.staes_number[0]+self.staes_number[1]+self.staes_number[2]+self.staes_number[3];
			}
		}
	}
</script>

<style>
</style>
