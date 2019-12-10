<template>
	<view>
		<!-- 公用样式导航条 -->
		<view class="app_top">
		</view>
		<view class="normal_nav">
			<view class="top"></view>
			<navigator class="left" open-type="navigateBack">
				<image style="width: 25upx;height: 25upx;" src="/static/back.png" mode="widthFix"></image>
			</navigator>
			<view class="title">{{psName}}</view>
			<view class="right"></view>
		</view>
		<!-- 楼房整改交付状态p984 -->
		<view class="states">
			<view class="state" v-for="s in states" :style="'background-color:'+s.bgcolor+';color:'+s.color+';'">
				<view>{{s.state}}</view>
				<view>({{s.number}})</view>
			</view>
		</view>
		<view class="storeys"  v-for="(t,index) in tendown">
			<view class="storey" style="border-bottom: 1px solid #ddd;">第{{index+1}}楼</view>
			<view class="number_container">
				<navigator class="storey_number" v-for="n in tendown[index]" :url="'details?psId='+n.psId+'&psName='+n.psName" >{{n.psName}}</navigator><!-- :class="n.state" -->
			</view>
		</view>
	</view>
</template>

<script>
	var self,number1,unit1,states;
	export default{
		onLoad(e) {
			self=this;
			console.log(e)
				self.psId=e.psId;
				self.psName=e.psName;
				console.log(self.psId)
				console.log(self.psName)
				
			
			// self.number1=e.number;
			// self.unit1=e.unit;
			// console.log(self.number1)
			// console.log(self.unit1)
			// self.states[1].number=90;
			// self.states[2].number=6;
			// self.states[3].number=6;
			// self.states[4].number=6;
			// self.states[0].number=self.states[1].number+self.states[2].number+self.states[3].number+self.states[4].number;
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemsonList?psPid='+self.psId,
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
					"prId":e
				},
				success: res => {
					console.log(res)
					console.log(res.data.rows)
					console.log(JSON.stringify(res.data.rows))
					self.getData=res.data.rows
					for (let i = 0; i < res.data.rows.length; i++) {
						let obj={}
						obj.psName= res.data.rows[i].psName
						obj.psId= res.data.rows[i].psId
						console.log(obj)
						if(obj.psName.length==3){
							self.three.push(obj)
						}else if(obj.psName.length==4){
							self.four.push(obj)
						}else{
							console.log("有异常数据")
						}
						
						// self.flatslist.push(obj)
					}
					console.log(self.three.length)
					console.log(self.four.length)
					// for (let i = 0; i < self.three.length; i++) {
					// 	console.log(self.three[i].psName[0])
					// }
					self.three.sort(function(a,b){
						return a.psName-b.psName
					})
					console.log(JSON.stringify(self.three))
					console.log("==============")
					self.four.sort(function(a,b){
						return a.psName-b.psName
					})
					console.log(JSON.stringify(self.four))
					for (let j = 0; j < 9; j++) {
						self.tendown[j]=[]
						for (let i = 0; i < self.three.length; i++) {
							if(self.three[i].psName[0]==j+1){
								self.tendown[j].push(self.three[i])
							}
						}
						
					}
					console.log(JSON.stringify(self.tendown))
					console.log("==============")
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onShow() {
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
			const app = getApp()
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/selectProblemsonStateNum?psId='+self.psId,
				method: 'GET',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				success: res => {
					console.log(res.data)
					self.states[2].number=res.data[1];
					self.states[3].number=res.data[2];
					self.states[1].number=res.data[3];
					self.states[4].number=res.data[4];
					self.states[0].number=parseInt(self.states[1].number)+parseInt(self.states[2].number)+parseInt(self.states[3].number)+parseInt(self.states[4].number);
				},
				fail: () => {},
				complete: () => {
					setTimeout(function () {
					    uni.hideLoading();
					}, 1000);
				}
			});
		},
		data(){
			return{
				flatslist:[],
				psId:"",
				psName:"",
				number1:"",
				unit1:"2",
				three:[],
				four:[],
				tendown:[],
				tenup:[],
				states:[
					{state:"全部",number:0,bgcolor:"#fff",color:"#333"},
					{state:"待交付",number:0,bgcolor:"#fff",color:"#333"},
					{state:"待整改",number:0,bgcolor:"#ed5d68",color:"#fff"},
					{state:"已整改",number:0,bgcolor:"#a5d457",color:"#fff"},
					{state:"已交付",number:0,bgcolor:"#f3ae3e",color:"#fff"},
				],
				storeys:[1,2,3,4,5,6,7,8,9],
				storey_numbers:[
					{number:1,state:"delivered"},  //已交付
					{number:2,state:"undelivered"},  //未交付
					{number:3,state:"changed"},  //已整改
					{number:4,state:"nochange"}  //待整改
					]
			}
		},
		computed:{
			total(){
				// return self.staes_number[0]+self.staes_number[1]+self.staes_number[2]+self.staes_number[3];
			}
		}
	}
</script>

<style>
</style>
