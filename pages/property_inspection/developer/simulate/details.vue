<template>
	<!-- 每套房子问题筛选页面815 -->
	<view class="details_content">
<!-- 顶部导航条 -->
		<view class="app_top"></view>
		<view class="normal_nav">
			<view class="top"></view>
			<navigator class="left" open-type="navigateBack">
				<image style="width: 25upx;height: 25upx;" src="/static/back.png" mode="widthFix"></image>
				</navigator>
			<view class="title">{{psName}}</view>
			<view class="right"></view>
		</view>
		
		<view class="show_container">
			<view class="details_container" :style="tab">
					<!-- 问题列表 -->
			<view  class="half">
				<navigator :url="'searchdescribe?duty='+JSON.stringify(duty)+'&main='+JSON.stringify(main)+'&item='+JSON.stringify(item)" class="screen">{{screentitle}}</navigator>
						<!-- <view class="picker_container">
							<picker :range="duty" @change="changeDuty">
								<view class="picker">{{duty[index1]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
							<picker :range="main" @change="changeMain">
								<view class="picker">{{main[index2]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
							<picker :range="item" @change="changeItem">
								<view class="picker">{{item[index3]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
						</view> -->
								<!-- 新增问题 -->
						<view class="newly_problem">
							<navigator class="newly_botton" :url="'take_notes?psId='+psId">新增问题</navigator>
							</view>
							<view class="img_container">
								<image class="img" src="/static/hxt.png" mode="scaleToFill"></image>
							</view>
				<!-- 问题列表 -->
							<scroll-view class="problemlist" scroll-y="true" >
								<navigator class="problem" :url="'problem_details?state='+e.pdState+'&pdId='+mainItempr[index].pdId+'&psId='+psId+'&psName='+psName" v-for="(e,index) in mainItempr" @click="getIndex(index)">
									<view class="top"> 
										<view class="color" :class="e.pdState=='1'?'color_red':'color_green'"></view>
									<view class="main_item">{{e.pdLoca}}-{{e.pdLocation}}-{{e.pdContent}}</view>
									<view class="urgent">{{e.pdStatus==0&&e.pdState==1?"加急":""}}</view>
									</view>
									
									<view class="problem_content"><text class="text">{{e.pdAccountabilityUnit}}</text></view>
									<!-- <view class="date">{{e.pdDate}}</view> -->
									<view class="date">{{e.pdDate.substr(0,11)}}</view>
									<view class="sate">
										<view class="dot" :class="e.pdState=='1'?'color_red':'color_green'"></view>
										<text>{{e.pdState==1?"待整改":"已整改"}}</text>
									</view>
								</navigator>
								<navigator class="problem" url="problem_details"  @click="getIndex(index)">
									<view class="top"> 
										<view class="color color_red" ></view>
										<view class="main_item">客厅-墙-开裂</view>
										<view class="urgent">加急</view>
									</view>
									
									<view class="problem_content"><text class="text">深圳xxxx有限公司</text></view>
									<!-- <view class="date">{{e.pdDate}}</view> -->
									<view class="date">2019-11</view>
									<view class="sate">
										<view class="dot color_red" ></view>
										<text>待整改</text>
									</view>
								</navigator>
								<view class="load_bottom">
									已无更多数据
								</view>
							</scroll-view>
						<!-- <view class="progress_container" :style="tab">
							<view class="progress">
							<view class="text">
								整改进度
							</view>
							 <progress percent="80" show-info="true" />
						</view>
						</view> -->
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(e) {
			self=this;
			
			console.log(e)
				self.psId=e.psId;
				console.log(self.psId)
				self.psName=e.psName;
				console.log(self.psName)
			
			for (var i = 0; i < 30; i++) {
				self.number.push(i)
			}
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			
		},
		onShow() {
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
			self.mainItempr=[]
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?psId='+self.psId,
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
					
				},
				success: res => {
					console.log(res.data)
					self.getData=res.data.rows
					console.log(self.mainItempr[0])
					if(self.showkey==0){
						self.mainItempr=res.data.rows
						console.log("11111")
					}
					console.log(self.getData)
					
					//获取部位数组
					for (let i = 0; i < res.data.rows.length; i++) {
						self.main.push(res.data.rows[i].pdLoca)
						
					}
					self.main=[...new Set(self.main)]
					console.log(self.main)
					//获取部品数组
					for (let k = 0; k < res.data.rows.length; k++) {
						self.item.push(res.data.rows[k].pdLocation)
					}
					self.item=[...new Set(self.item)]
					console.log(self.item)
					//获取责任单位数组
					for (let m = 0; m < res.data.rows.length; m++) {
						self.duty.push(res.data.rows[m].pdAccountabilityUnit)
					}
					self.duty=[...new Set(self.duty)]
					console.log(self.duty)
					
				},
				fail: () => {},
				complete: () => {
					uni.getStorage({
					    key: 'screen',
					    success: function (res) {
					        console.log(res.data);
							self.obj=res.data
							if(self.obj!=={}){
								let filter=[]
								self.screentitle=self.obj.duty+"-"+self.obj.main+"-"+self.obj.item
								for (let key in self.obj) {
									if(self.obj[key]!=="全部"){
										filter.push(self.obj[key])
									}
								}
								console.log(filter)
								if(filter.length==0){
									self.mainItempr=self.getData
								}
								
							if(filter.length==1){
								let filterresult1=[]
								for (let i = 0; i < self.getData.length; i++) {
									for (let key in self.getData[i]) {
										if(self.getData[i][key]==filter[0]){
											filterresult1.push(self.getData[i])
										}
									}
								}
								console.log(JSON.stringify(filterresult1))
								self.mainItempr=filterresult1
								
								}
								
								
								if(filter.length==2){
									let filterresult1=[]
									for (let i = 0; i < self.getData.length; i++) {
										for (let key in self.getData[i]) {
											if(self.getData[i][key]==filter[0]){
												filterresult1.push(self.getData[i])
											}
										}
									}
									let filterresult2=[]
									for (let k = 0; k < filterresult1.length; k++) {
										for (let key in filterresult1[k]) {
											if(filterresult1[k][key]==filter[1]){
												filterresult2.push(filterresult1[k])
											}
										}
									}
									console.log(JSON.stringify(filterresult2))
									self.mainItempr=filterresult2
									
									}
									
									if(filter.length==3){
										let filterresult1=[]
										for (let i = 0; i < self.getData.length; i++) {
											for (let key in self.getData[i]) {
												if(self.getData[i][key]==filter[0]){
													filterresult1.push(self.getData[i])
												}
											}
										}
										let filterresult2=[]
										for (let k = 0; k < filterresult1.length; k++) {
											for (let key in filterresult1[k]) {
												if(filterresult1[k][key]==filter[1]){
													filterresult2.push(filterresult1[k])
												}
											}
										}
										let filterresult3=[]
										for (let l = 0; l < filterresult2.length; l++) {
											for (let key in filterresult2[l]) {
												if(filterresult2[l][key]==filter[2]){
													filterresult3.push(filterresult2[l])
												}
											}
										}
										console.log(JSON.stringify(filterresult3))
										self.mainItempr=filterresult3
										
										}
								self.showkey=1
							}
					    }
					});
					// uni.removeStorage({
					//     key: 'screen',
					//     success: function (res) {
					//         console.log('success');
					//     }
					// });
					
					uni.hideLoading()
				}
			});
		},
		data(){
			return{
				psId:"",
				psName:"",
				getData:[],
				getperson:[],
				getmain:"请选择",
				getitem:"请选择",
				mainItempr:[],
				show:false,
				ac:true,
				tab:"left:0upx;transition:0.3s;",
				sub:"left:750upx;transition:0.3s;",
				title:"8-2-201",
				duty:["选择责任方"],
				index1:0,
				main:["选择部位"],
				index2:0,
				item:["选择部品"],
				index3:0,
				problemindex:-1,
				problemlist:[],
				obj:{},
				screentitle:"点击筛选",
				standard:[],
				red:false,
				baytype:[
					{type:"垂直度",name:"verticality"},
					{type:"平整度",name:"planeness"},
					{type:"阴阳角",name:"yyj"},
					{type:"开间",name:"bay"},
					{type:"湿度",name:"humidity"}
					],
				number:[],
				number2:[1,2,3,4,5],
				showkey:0
				
			}
		},
			methods:{
				
				// problemList:()=>{
				// 	self.ac=true;
				// 	self.tab="left:0upx;transition:.3s;";
				// 	self.sub="left:750upx;transition:.3s;";
				// },
				// clickMeasure:()=>{
				// 	self.ac=false;
				// 	self.tab="left:-750upx;transition:.3s;";
				// 	self.sub="left:0upx;transition:.3s;";
				// },
				changeDuty:(e)=>{
					self.index1=e.detail.value;
					self.main=["请选择"]
					self.item=["请选择"]
					self.getperson=[]
					self.index2=0
					self.index3=0
					self.getmain=[]
					console.log(self.duty[e.detail.value])
					for (let i = 0; i < self.getData.length; i++) {
						 if(self.getData[i].pdRecorder==self.duty[e.detail.value]){
							 self.getperson.push(self.getData[i])
						 }
					}
					console.log(JSON.stringify(self.getperson))
					for (let j = 0; j < self.getperson.length; j++) {
						self.main.push(self.getperson[j].pdLoca)
						 self.getmain.push(self.getperson[j])
					}
					function unique (arr) {
						return Array.from(new Set(arr))
					}
					self.main=unique(self.main)
					console.log(self.main)
					console.log("========================")
					console.log(JSON.stringify(self.getmain))
					
				},
				changeMain:(e)=>{
					self.index2=e.detail.value;
					self.getmain=self.main[e.detail.value]
					console.log(self.getmain)
					
					if(self.getitem=="请选择"&&self.getmain!=="请选择"){
						const app = getApp()
						uni.request({
							url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdLoca='+self.getmain+'&psId='+self.psId,
							method: 'POST',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							success: res => {
								console.log(res)
								self.mainItempr=res.data.rows
							}
					})
					}else if(self.getitem!=="请选择"&&self.getmain!=="请选择"){
						const app = getApp()
						uni.request({
							url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdLoca='+self.getmain+"&&pdLocation="+self.getitem+'&psId='+self.psId,
							method: 'POST',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							success: res => {
								console.log(res)
								self.mainItempr=res.data.rows
							}
					})
					}else if(self.getitem!=="请选择"&&self.getmain=="请选择"){
						const app = getApp()
							uni.request({
								url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdLocation='+self.getitem+'&psId='+self.psId,
								method: 'POST',
								header:{
									'Content-type':'application/json',
									'Cookie':self.cookies
								},
								success: res => {
									console.log(res)
									self.mainItempr=res.data.rows
								}
						})
					}else{
						self.mainItempr=self.getData
					}
					
					
					
					// function unique (arr) {
					// 	return Array.from(new Set(arr))
					// }
					// self.item=unique(self.item)
				},
				changeItem:(e)=>{
					self.index3=e.detail.value;
					self.getitem=self.item[e.detail.value]
					console.log(self.getitem)
					if(self.getitem=="请选择"&&self.getmain!=="请选择"){
						const app = getApp()
						uni.request({
							url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdLoca='+self.getmain+'&psId='+self.psId,
							method: 'POST',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							success: res => {
								console.log(res)
								self.mainItempr=res.data.rows
							}
					})
					}else if(self.getitem!=="请选择"&&self.getmain!=="请选择"){
						const app = getApp()
						uni.request({
							url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdLoca='+self.getmain+"&&pdLocation="+self.getitem+'&psId='+self.psId,
							method: 'POST',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							success: res => {
								console.log(res)
								self.mainItempr=res.data.rows
							}
					})
					}else if(self.getitem!=="请选择"&&self.getmain=="请选择"){
						const app = getApp()
							uni.request({
								url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdLocation='+self.getitem+'&psId='+self.psId,
								method: 'POST',
								header:{
									'Content-type':'application/json',
									'Cookie':self.cookies
								},
								success: res => {
									console.log(res)
									self.mainItempr=res.data.rows
								}
						})
					}else{
						self.mainItempr=self.getData
					}
					
				},
				getIndex:(index)=>{
					self.problemindex=index;
					console.log(self.problemindex)
				},
				submitMeasure:(e)=>{
					console.log(e)
				},
				judgeValue:(e)=>{
					console.log(e)
					self.measure[e.target.offsetTop]=e.target.value;
					console.log(self.measure[e.target.offsetTop])
					if(self.measure[e.target.offsetTop]&&self.standard[e.target.offsetTop]){
						if(self.measure[e.target.offsetTop]>self.standard[e.target.offsetTop]){
							self.red=true;
						}else{
							self.red=false;
						}
					}
				},
				judgeStandard:(e)=>{
					self.standard[e.target.offsetTop]=e.target.value;
					console.log(self.standard[e.target.offsetTop])
					if(self.measure[e.target.offsetTop]&&self.standard[e.target.offsetTop]){
						if(self.measure[e.target.offsetTop]>self.standard[e.target.offsetTop]){
							self.red=true;
						}else{
							self.red=false;
						}
					}
				}
			}
	}
</script>

<style>
	.web_title{
		height: 6vh;
		width: 750upx;
		margin-bottom: 2%;
		white-space: nowrap;
	}
	.nav{
		display: inline-block;
		width: 373upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		color: #999;
		border: 1px solid #ddd;
	}
	.active{
		color: #333;
		border-bottom: #00B4FF solid 5upx;
	}
	.show_container{
		width: 750upx;
		height: 100%;
		overflow: hidden;
	}
	.details_container{
		position: relative;
		width: 1520upx;
	}
	.half{
		display: inline-block;
		width: 750upx;
		height: 90vh;
		float: left;
	}
	.screen{
		width: 96%;
		margin: 2% 2%;
		color: #00B4FF;
		border: #00B4FF 1px solid;
		border-radius: 10upx;
		text-align: center;
	}
.picker_container{ 
	height: 100upx;
	white-space: nowrap;
	}
	.picker{
		display: inline-block;
		width: 30.5%;
		float: left;
		border: #ddd 1px solid;
		border-radius: 10upx;
		margin: 1%;
		color: #00B4FF;
		text-indent: 5%;
		font-size: 30upx;
		}
		.arrow{
			position: relative;
			float: right;
			top: -10upx;
			display: inline-block;
			width: 40upx;
			height: 40upx;
			overflow: hidden;
			margin-top: 8%;
			margin-right: 2%;
		}
		
.newly_problem{
	width: 100%;
	}
	.newly_botton{
		display: inline-block;
		width: 70%;
		margin: 0 15%;
		border: #ddd 1px solid;
		color: #666;
		border-radius: 15upx;
		text-align: center;
	}


.img_container{
	margin: 2%;
	}
	.img{
		display: block;
		width: 90%;
		height: 25vh;
		margin: 0 5% 0 5%;
	}


.problemlist{
	width: 100%;
	height: 65vh;
	overflow: hidden;
	}
	.problem:first-child{
		border-top: #ddd 1px solid;
	}
	.problem{
		width: 100%;
		height: 150upx;
		border-bottom: #ddd 1px solid;
		}
		.top{
			height: 40upx;
			white-space: nowrap;
		}
		.color{
			display: inline-block;
			position: relative;
			left: -520upx;
			width: 15upx;
			height: 35upx;
			margin-top: 1%;
			margin-left: 5%;
			border-radius: 15upx;
		}
		.color_red{
			background-color: #eb3226;
		}
		.color_green{
			background-color: #a5d255;
		}
		.main_item{
			float: left;
			display: inline-block;
			width: 70%;
			color: #333;
			text-indent: 60upx;
			font-size: 35upx;
		}
		.urgent{
			display: inline-block;
			width: 26%;
			text-align: center;
			font-size: 35upx;
			color: #ffa500;
		}
		.problem_content{
			display: inline-block;
			float: left;
			width: 70%;
			text-indent: 70upx;
			font-size: 30upx;
			color: #999;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.date{
			display: inline-block;
			width: 70%;
			float: left;
			text-indent: 70upx;
			font-size: 30upx;
			color: #999;
		}
		.sate{
			display: inline-block;
			font-size: 35upx;
			width: 30%;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			position: relative;
			right: 0upx;
			top:0upx;
			}
			.state text{
				margin-left: 5upx;
			}
			.dot{
				display: inline-block;
				width: 28upx;
				height: 28upx;
				border-radius: 50%;
			}

.progress_container{
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #fff;
	}
	.progress{
		width: 90%;
		margin: 0 5%; 
		}
		
		.text{ 
			font-size: 35upx; 
		}



/* //实测实量 */
		input{
			border-radius: 10upx;
		}
		.basic_headline{
			color: #00b4ff;
			border-bottom: 0;
			border-top: 0;
			font-size: 40upx;
		}
		.content{
			display: inline-block;
			width: 100%;
			padding-bottom: 2%;
			line-height: 50upx;
			font-size: 30upx;
			white-space: nowrap;
			}
			.roomtype{
				margin-left: 2%;
				font-size: 35upx;
				color: #333;
			}
			.standard{
				float: right;
				margin-right: 10%;
				color: #333;
			}
			.right1{
				margin-left: 78%;
				color: #999;
			}
			.right2{
				margin-left: 3%;
				color: #999;
			}
			.data_content{
				display: inline-block;
				width: 75%;
				}
				.wrap{
					white-space: normal;
					}
				    .manyinput{
						display: inline-block;
						width: 70upx;
						background-color: #fff;
						margin-left: 3%;
						margin-top: 1%;
						border: 1px solid #ddd;
					}
				
					.inputcontent{
					width: 100%;
					margin-top: 3%;
					height: 60upx;
					text-indent: 2%;
					}
					.inputtitle{
						display: inline-block;
						width: 20%;
						vertical-align: top;
						}
						 .inputtitle text{
							color: #666;
						}
						.inputvalue{
						display: inline-block;
						width: 75%;
						border: 1px solid #ddd;
						}
		.standard_container{
			display: inline-block;
				width: 20%;
				height: 355upx;
				margin-left: 3%;
				margin-top: 2%;
				vertical-align: top;
				border: 1px solid #ddd;
				border-radius: 10upx;
				}
				.inputstandard{
				display: inline-block;
				width: 85%;
				margin-left: 2%;
				margin-top: 155upx;
		}
		.standard_container2{
			display: inline-block;
			width: 23%;
			margin-left: 3%;
			vertical-align: top;
			white-space: nowrap;
			margin-bottom: 150upx;
			}
			.standard_half{
				display: inline-block;
				width: 50%;
				vertical-align: top;
				white-space: normal;
				}
			.standard_half .manyinput{
					display: inline-block;
					width: 70upx;
					background-color: #fff;
					margin-top: 6%;
					border: 1px solid #ddd;
				}
				.submit_container{
					position: fixed;
					bottom: 10upx;
					background-color: #fff;
					height: 100upx;
					width: 100%;
				}
				.submit{
					background-color: #00B4FF;
					width: 75%;
					margin: 0 12.5%;
				}

</style>
