<template>
	<view :style="(big==-1)?'':'height:550px;overflow: hidden;'">
		<scroll-view scroll-y="true" >
			<view> 
				<view class="options" @touchmove.stop.prevent="moveHandle">
					<view class="options_container" @touchmove.stop.prevent="moveHandle">
						<view class="option option_color" @click.stop.prevent="showOption1">第一步</view>
						<view class="hr"  :class="show2==true||show3==true?'option_color':''"></view>
						<view class="option" @click.stop.prevent="showOption2" :class="show2==true||show3==true?'option_color':''">第二步</view>
						<view class="hr" :class="show3==true?'option_color':''"></view>
						<view class="option" @click.stop.prevent="showOption3" :class="show3==true?'option_color':''">第三步</view>
					</view>
				</view>
				
				<view style="height: 150upx;"></view>
				
					<view class="" v-show="show1">
						<form @submit="submitOption1">
							
						
						<view class="basic_container" style="border-top: 1px solid #ddd;">
							<text class="basic_title" style="font-size: 35upx;font-weight: bold;color: #333;">用户类型</text>
							<text class="basic_contentb">个人</text>
								</view>
							<view class="basic_headline">
								<text>检测信息</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">项目名称</text>
								<text class="basic_contentb">项目A</text>
							</view>
							<view class="basic_container">
								<text class="basic_titleblod" style="color: #666;">委托方信息</text>
								<text class="basic_contentb"></text>
							</view>
							<view class="basic_container">
								<text class="basic_title">姓名</text>
								<text class="basic_contentb">张三</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">地址</text>
								<text class="basic_contentb">8号楼房间和公区查验</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">联系人</text>
								<text class="basic_contentb">张三</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">联系电话</text>
								<text class="basic_contentb">15555555555</text>
							</view>
							<view class="basic_container">
								<text class="basic_titleblod" style="color: #666;">受检方信息</text>
								<text class="basic_content"></text>
							</view>
							<view class="basic_container">
								<text class="basic_title">姓名</text>
								<text class="basic_contentb">李四</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">地址</text>
								<text class="basic_contentb">8号楼房间和公区查验</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">联系人</text>
								<text class="basic_contentb">李四</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">联系电话</text>
								<text class="basic_contentb">15555555555</text>
							</view>
						<view class="basic_container">
							<text class="basic_titleblod">检测来源</text>
							<input class="basic_input" name="surveySource" type="text" :value="option1.surveySource" >
						</view>
						<!-- 日期样式p1156 -->
						<!-- <view class="date_container" style="margin-left: 2%;">
							<view style="font-size: 30upx;font-weight: 500;">分析时间</view>
							<picker name="analyzeTime" mode="date" :value="dateA" @change="pickDateA">
								<view class="date">{{dateA}}</view>
							</picker>
							<picker name="analyzeTime_ud" :value="upordown_Aindex" :range="upordown_A" @change="pickTimeA">
								<view class="time">{{upordown_A[upordown_Aindex]}}</view>
							</picker>
						</view> -->
						<view class="basic_container">
							<text class="basic_titleblod">温度</text>
							<input class="basic_input" name="temperature" type="text" :value="option1.temperature" >
						</view>
						<view class="basic_container">
							<text class="basic_titleblod">湿度</text>
							<input class="basic_input" name="humidity" type="text" :value="option1.humidity" >
						</view>
						<!-- <view class="basic_container">
							<text class="basic_title"></text>
							<text class="basic_content"></text>
						</view> -->
						<button form-type="submit" type="primary" class="next"@click="nextModel1">下一步</button>
						</form>
					</view>
					
					
				
				<view class="" v-show="show2" style="position: relative;">
					<form @submit="submitOption2">
						<view v-for="(item,i) in itemArray">
							<view class="basic_headline">
								<text>检测项目及其方法</text>
							</view>
							<view class="basic_container" >
								<text class="basic_title" style="color: #333;">检测项目{{i+1}}</text>
								<input class="basic_input" :name="'itemName'+i" type="text" value="" style="vertical-align: top;">
								
							</view>
							<view class="basic_container2">
								<text class="basic_title2">分析方法{{i+1}}</text>
								<textarea class="textarea2" :value="option2.itemMethod" :name="'itemMethod'+i" />
							</view>
							<view class="basic_headline">
								<text>现场动态</text>
							</view>
							<view class="basic_container2">
								<text class="basic_title">现场照片{{i+1}}(可选五张)</text>
								<view class="picture" >
									<view class="pic_container" v-for="(p,index) in pic[i]" >
										<image class="pic" :src="p" mode="aspectFill" @click="previewPic(i,index)"></image>
										<view class="del" @click="delPic(index)"><image class="del_img" src="/static/delete@2x.png" mode="widthFix"></image></view>
									</view>
									<!-- <view class="pic_container" v-for="(v,index) in vde">
										<video v-if="show==1"  class="pic" :src="v" :style="(big==-1)?'':(big==index)?'position: fixed; top: 0; left: 0; width: 750upx; margin:0;':'position: fixed; top: -1500upx;'" @play="playVideo(index)"   @pause="pauseVideo" @ended="pauseVideo"></video>
										<view v-show="previewvde==index" style="background-color: black;position: fixed; bottom: 0; left: 0; width: 100%;height: 750upx; z-index: 10;">
											<view :style="vdebutton">
												<button type="warn" style=" width: 100%;" @click="delVideo(index)">重新拍摄/选择</button>
										<button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
											</view>
										</view>
									</view> -->
									<view class="addpic"   @click="addPic(i)">
										<image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image>
										</view>
								</view>
								</view>
								<view class="basic_container2" style="border-bottom:1px solid #00B4FF ; padding-bottom: 5%;">
									<text class="basic_title">备注{{i+1}}</text>
									<textarea class="textarea" :name="'remark'+i" :value="option2.remark"/>
								</view>
							<!-- <view class="basic_container">
								<text class="basic_title"></text>
								<text class="basic_content"></text>
							</view> -->
							
						</view>
						<button class="addtype"  @click="addItem()">新增</button>
						<view class="basic_container">
							<text class="basic_title"></text>
							<text class="basic_content"></text>
						</view>
						<button form-type="submit" type="primary" class="next" @click="nextModel2">下一步</button>
						</form>
				</view>
				
					
					<view class="" v-show="show3">
						<form @submit="submitOption3">
							
						
							<view class="basic_headline">
								<text>仪器设备</text>
							</view>
							<view v-for="inst in instArray" style="border-bottom: 1px solid #ddd;">
								<view class="basic_container">
								<text class="basic_title">仪器名称{{inst+1}}</text>
								<input class="basic_input" :name="'nameInst'+inst" type="text" value="" >
							</view>
							<view class="basic_container">
								<text class="basic_title">规格型号{{inst+1}}</text>
								<input class="basic_input" :name="'modelInst'+inst" type="text" value="" >
							</view>
							<view class="basic_container">
								<text class="basic_title">出厂编号{{inst+1}}</text>
								<input class="basic_input" :name="'numberInst'+inst" type="text" value="" >
							</view>
							<view class="basic_container">
								<text class="basic_title">检测因子{{inst+1}}</text>
								<input class="basic_input" :name="'factorInst'+inst" type="text" value="" >
							</view>
							</view>
							
							<view class="basic_container">
								<button class="addtype"  @click="addInst">新增</button>
							</view>
					
						<view class="basic_headline">
							<text>检测内容</text>
						</view>
						<view v-for="smap in smapArray" style="border-bottom: 1px solid #ddd;">
							<view class="basic_container">
								<text class="basic_title">检测项目{{smap+1}}</text>
								<input class="basic_input" :name="'surveyItem'+smap" type="text" value="" >
							</view>
							<!-- <view class="basic_container">
								<text class="basic_title">采样时间</text>
								<input class="basic_input" :name="'sampleTime'+smap" type="text" value="" >
							</view> -->
							<!-- 日期样式p1156 -->
							<!-- <view class="date_container" style="margin-left: 2%;">
								<view style="font-size: 30upx;color: #666;">采样时间</view>
								<picker :name="'samplingDate'+smap" mode="date" :value="samplingdate" @change="pickSamplingDate">
									<view class="date">{{samplingdate}}</view>
								</picker>
								<picker :name="'samplingTime'+smap" :value="samplingTime" :range="samplingTime" @change="pickSamplingTime">
									<view class="time">{{samplingTime[samptime_index]}}</view>
								</picker>
							</view> -->
							
						<view class="basic_container">
							<text class="basic_title">样品名称{{smap+1}}</text>
							<input class="basic_input" :name="'sampleName'+smap" type="text" value="" >
						</view>
						<view class="basic_container">
							<text class="basic_title">样品描述{{smap+1}}</text>
							<input class="basic_input" :name="'sampleDescription'+smap" type="text" value="" >
						</view>
						
						</view>
						
						<view class="basic_container">
							<button class="addtype" @click="addSmap">新增</button>
						</view>
					
					<view class="basic_headline">
						<text>检测结果</text>
					</view>
					<view class="basic_container2">
						<text class="basic_title2">检测结果</text>
						<textarea class="textarea2" value="" name="monitoringResult" />
					</view>
					<view class="basic_headline removebottomline">
						<text>空气问题反馈</text>
					</view>
					<view class="basic_container2">
						<textarea class="textarea" value="" name="airProblem" />
						</view>
						<!-- <view class="basic_headline removebottomline">
							<text>治理时间</text>
						</view> -->
						<!-- 日期样式p1156 -->
						<!-- <view class="date_container">
							<view>当前选择</view>
							<picker name="governDate" mode="date" :value="date" @change="pickDate">
								<view class="date">{{date}}</view>
							</picker>
							<picker name="governTime" :range="hours" :value="governtime" @change="pickGovernTime">
								<view class="time">{{governtime}}:00</view>
							</picker> -->
							<!-- <picker name="upOrDown" :value="upordown_index" :range="upordown" @change="pickTime">
								<view class="time">{{upordown[upordown_index]}}</view>
							</picker> -->
						<!-- </view> -->
						<view class="basic_container">
							<text class="basic_title"></text>
							<text class="basic_content"></text>
						</view>
						<button class="submit" form-type="submit" type="primary">提交</button>
						</form>
					</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	var self;
	var year,month,day,time;
	export default{
		onLoad() {
			self=this;
			self.time=new Date();
			self.year=self.time.getFullYear();
			self.month=self.time.getMonth()+1;
			self.day=self.time.getDate();
			self.date=self.year+"-"+self.month+"-"+self.day; 
			self.dateA=self.year+"-"+self.month+"-"+self.day; 
			self.samplingdate=self.year+"-"+self.month+"-"+self.day; 
			self.pic[self.pic_index]=[]
			self.index_array[self.pic_index]=0
			
			for (var i = 0; i < 25; i++) {
				let hour=i.toString()+":00"
				self.hours.push(hour)
			}
			console.log(self.date)
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			uni.getStorage({
			    key: 'option1',
			    success: function (res) {
			        console.log(res.data);
					self.option1=res.data;
					self.index=self.option1.roleId;
					self.dateA=self.option1.analyzeTime;
					self.upordown_Aindex=self.option1.analyzeTime_ud;
					self.lock2=true;
			    }
			});
			uni.getStorage({
			    key: 'option2',
			    success: function (res) {
			        console.log(res.data);
					self.option2=res.data;
					self.itemArray=self.option2.itemArray;
					self.lock3=true;
			    }
			});
		},
		data(){
			return{
				IN:[],
				option1:{},
				option2:{},
				option3:{},
				nowFileId:"",
				index_array:[],
				pic_index:0,
				pic:[],
				preview:[],
				vde_index:0,
				vde:[],
				id:[],
				vdecss:"position: fixed; top: 0; left: 0; width: 750upx; height: 750upx; z-index: 100; margin:0;",
				big:-1,
				vdebutton:" position: fixed; bottom: -250upx;width: 100%;",
				show:1,
				previewvde:-1,
				del:[],
				wh:"",
				takenotes:[1],
				note:1,
				date:"",
				time:"",
				governtime:"9",
				hours:[],
				upordown:["上午","下午"],
				upordown_index:0,
				dateA:"",
				upordown_A:["上午","下午"],
				upordown_Aindex:0,
				samplingdate:"",
				samplingTime:["上午","下午"],
				samptime_index:0,
				user:["个人","开发商","工装"],
				index:0,
				show1:true,
				show2:false,
				show3:false,
				lock2:false,
				lock3:false,
				itemNumber:0,
				itemArray:[0],
				instNumber:0,
				instArray:[0],
				smapNumber:0,
				smapArray:[0],
				refresh:true,
				
			}
		},
		methods:{
			submit:(e)=>{
				console.log(e)
				e.detail.value.upOrDown=self.upordown[e.detail.value.upOrDown];
				e.detail.value.analyzeTime_ud=self.upordown_A[e.detail.value.analyzeTime_ud];
				console.log(option1)
				
				console.log(option2)
				const app = getApp()
				console.log(app.globalData.ctx)
				console.log(self.option3.upOrDown)
				console.log(self.option1.analysisTime_ud)
				uni.request({
					url: app.globalData.ctx+'/home/homeAirMonitoring/add',
					header:{
						'Content-type':'application/json',
						'Cookie':self.cookies
					},
					method: 'post',
					data: {
						//第一步数据
						"roleId": self.option1.roleId,
						"projectName": self.option1.projectName,
						"homeCustomers": [{
							"address": self.option1.clientAddress,
							"contactName": self.option1.clientContacts,
							"customerType": "1",
							"name": self.option1.clientName,
							"phone": self.option1.clientNumber,
							"userType":self.option1.roleId,
						},
						{
							"address": self.option1.ownerAddress,
							"contactName": self.option1.ownerContacts,
							"customerType": "2",
							"name": self.option1.ownerName,
							"phone": self.option1.ownerNumber,
							"userType":self.option1.roleId,
						}],
						"monitoringSource": self.option1.surveySource,
						"analyzeCondition": self.option1.analysisCondition,
						"analyzeTime": self.option1.analysisTime+","+self.option1.analysisTime_ud,
						//第二步数据
						"homeMonitoringItems":[{
								"monitoringItem": self.option2.monitoringItem,
								"analyzeCondition": self.option2.itemMethod,
								"domainWalker": self.option2.itemRange,
								
						}],
						"remark": self.option2.remark,
						//第三步数据
						"homeMonitoringContents":JSON.stringify(self.option3.monitoringcontents) ,
						"homeEquipments":self.option3.equipments,
						"monitoringResult": self.option3.monitoringResult,
						"airProblem": self.option3.airProblem,
						"monitoringTime": self.option3.governTime+","+self.option3.upOrDown,	
						},
						
						
					success: res => {
						console.log(res)
					},
					fail: () => { 
						console.log("数据请求错误")
						uni.showToast({
						    title: '数据请求错误',
							icon:'none'
						});
						setTimeout(function(){
							uni.hideToast();
						},1000)
					},
					complete: () => {}
				});
				uni.navigateBack({
					delta: 1
				});
				uni.removeStorage({
				    key: 'option1',
				    success: function (res) {
				        console.log('success1');
				    }
				});
				uni.removeStorage({
				    key: 'option2',
				    success: function (res) {
				        console.log('success2');
				    }
				});
			},
			submitOption1:(e)=>{
				console.log("获取option1")
				console.log(e)
				self.option1=e.detail.value;
				console.log(self.option1)
				console.log(self.option1.clientNumber)
				uni.setStorage({
				    key: 'option1',
				    data: self.option1,
				    success: function () {
				        console.log('success op1');
				    }
				});
				
			},
			submitOption2:(e)=>{
				console.log("获取option2")
				console.log(e)
				self.option2=e.detail.value;
				self.option2.itemArray=self.itemArray;
				self.option2.monitoringItem=""
				for(var key in self.option2){
					if(key.search("itemName")==0){
						self.option2.monitoringItem=self.option2.monitoringItem+self.option2[key]+",";
					}
				}
				self.option2.monitoringItem=self.option2.monitoringItem.substring(0,self.option2.monitoringItem.length-1)
				console.log(self.option2.monitoringItem)
				
				const app = getApp()
				console.log(app.globalData.ctx)
				for(let i=0;i< self.pic.length; i++){
					uni.uploadFile({
							url:app.globalData.ctx+ '/common/uploadFileUnify',
							fileType: "image", 
								header:{
									'Content-type':'application/x-www-form-urlencoded',
									'Cookie':self.cookies
								},
					            name:"files",
								filePath:self.pic[i],
					            success: (res) => {
									uni.showToast({
										title: '上传成功'
									});
					                console.log(res.data);
									let imgId=JSON.parse(res.data).fileIds
									console.log("获取到fileid为:"+imgId);
									self.nowFileId=self.nowFileId+imgId;
									console.log("获取到nowFileId为:"+self.nowFileId);
					            },
								fail: () => {
									uni.showToast({
										title: '上传失败'
									});
								}
					        });
							
					}
					
				
				uni.setStorage({
				    key: 'option2',
				    data: self.option2,
				    success: function () {
				        console.log('success op2');
				    }
				});
			},
			submitOption3:(e)=>{
				console.log("获取option3")
				console.log(e)
				uni.navigateBack({
					delta: 1
				});
				uni.removeStorage({
				    key: 'option1',
				    success: function (res) {
				        console.log('success1');
				    }
				});
				uni.removeStorage({
				    key: 'option2',
				    success: function (res) {
				        console.log('success2');
				    }
				});
				// self.nowFileId=self.nowFileId.substring(0,self.nowFileId.length-1);
				// console.log("获取到nowFileId为:"+self.nowFileId);
				// self.option3=e.detail.value;
				// self.option3.equipments=[];
				// self.option3.monitoringcontents=[];
				// let obj ={}
				// let a1="nameInst",a2="modelInst",a3="numberInst",a4="factorInst"
				// let b="0"
				// //获取设备仪器value
				// for(let i =0; i< self.instArray.length;i++){
				// 	for(var key in self.option3){
				// 	if(key.search(a1+b)!==-1){
				// 			obj.name=self.option3[key]
				// 	}
				// 	if(key.search(a2+b)!==-1){
				// 			obj.type=self.option3[key]
				// 	}
				// 	if(key.search(a3+b)!==-1){
				// 			obj.factoryCode=self.option3[key]
				// 	}
				// 	if(key.search(a4+b)!==-1){
				// 			obj.itemId=self.option3[key]
				// 	}
				// }
				// self.option3.equipments.push(obj)
				// console.log("shebei")
				// console.log(self.option3.equipments)
				// JSON.stringify(self.option3.equipments)
				// b++;
				// obj={}
				// }
				// let a5="surveyItem",a6="sampleTime",a7="sampleName",a8="sampleDescription"
				// let c="0"
				// // 获取监测内容value
				// for(let i =0; i< self.smapArray.length;i++){
				// 	for(var key in self.option3){
				// 	if(key.search(a5+c)!==-1){
				// 			obj.monitoringItem=self.option3[key]
				// 	}
				// 	if(key.search(a6+c)!==-1){
				// 			obj.remark=self.option3[key]
				// 	}
				// 	if(key.search(a7+c)!==-1){
				// 			obj.sampleName=self.option3[key]
				// 	}
				// 	if(key.search(a8+c)!==-1){
				// 			obj.sampleDescription=self.option3[key]
				// 	}
				// }
				// self.option3.monitoringcontents.push(obj)
				// console.log("neirong")
				// console.log(self.option3.monitoringcontents)
				// c++;
				// obj={}
				// }
				// console.log("=======================")
				// console.log(self.option1)
				// console.log(self.option2)
				// console.log(self.option3)
				// const app = getApp()
				// console.log(app.globalData.ctx)
				// self.option3.upOrDown=self.upordown[self.option3.upOrDown]
				// self.option1.analyzeTime_ud=self.upordown[self.option1.analyzeTime_ud]
				// console.log(self.option3.upOrDown)
				// console.log(self.option1.analyzeTime_ud)
				// uni.request({
				// 	url: app.globalData.ctx+'/home/homeAirMonitoring/add',
				// 	header:{
				// 		'Content-type':'application/json',
				// 		'Cookie':self.cookies
				// 	},
				// 	method: 'post',
				// 	data: {
				// 		//第一步数据
				// 		"roleId": self.option1.roleId,
				// 		"projectName": self.option1.projectName,
				// 		"homeCustomers": [{
				// 			"address": self.option1.clientAddress,
				// 			"contactName": self.option1.clientContacts,
				// 			"customerType": "1",
				// 			"name": self.option1.clientName,
				// 			"phone": self.option1.clientNumber,
				// 			 "userType": self.option1.roleId
				// 		},
				// 		{
				// 			"address": self.option1.ownerAddress,
				// 			"contactName": self.option1.ownerContacts,
				// 			"customerType": "2",
				// 			"name": self.option1.ownerName,
				// 			"phone": self.option1.ownerNumber,
				// 			"userType": self.option1.roleId
				// 		}],
				// 		"monitoringSource": self.option1.surveySource,
				// 		"analyzeCondition": self.option1.analysisCondition,
				// 		"analyzeTime": self.option1.analyzeTime,
				// 		// +","+self.option1.analyzeTime_ud,
						
				// 		//第二步数据
				// 		"homeMonitoringItems":[{
				// 				"monitoringItem": self.option2.monitoringItem,
				// 				"analyzeCondition": self.option2.itemMethod,
				// 				"domainWalker": self.option2.itemRange,
								
				// 		}],
				// 		"remark": self.option2.remark,
				// 		//第三步数据
				// 		"nowFileId": self.nowFileId,
				// 		"homeMonitoringContents":self.option3.monitoringcontents ,
				// 		"homeEquipments":self.option3.equipments,
				// 		"monitoringResult": self.option3.monitoringResult,
				// 		"airProblem": self.option3.airProblem,
				// 		"monGovernTime": self.option3.governTime+","+self.option3.upOrDown,	
				// 		},
						
						
				// 	success: res => {
				// 		console.log(res)
				// 		uni.navigateBack({
				// 			delta: 1
				// 		});
				// 	},
				// 	fail: () => { 
				// 		console.log("数据请求错误")
				// 		uni.showToast({
				// 		    title: '数据请求错误',
				// 			icon:'none'
				// 		});
				// 		setTimeout(function(){
				// 			uni.hideToast();
				// 		},1000)
				// 	},
				// 	complete: () => {}
				// });
				
			},
			addItem:()=>{
				self.itemNumber++;
				self.itemArray.push(self.itemNumber)
				self.pic_index++
				self.pic[self.pic_index]=[]
				self.index_array[self.pic_index]=0
				console.log(self.pic)
			},
			addPic:(i)=>{
				console.log(i)
				
				
				uni.chooseImage({
					count:5,
					sizeType: ['original', 'compressed'], 
					success: function (res) {
						res.tempFilePaths.forEach(function(e){
							if(self.index_array[i]>4){
								uni.showToast({
									title:"最多选五张",
									icon:"none"
								})
								return false;
							}
							self.pic[i][self.index_array[i]]=e;
							self.index_array[i]++;
							// self.refresh=false;
						})
						console.log(self.index_array[i]);
						console.log(self.pic[i]);
						self.pic.push([])
						console.log(self.pic);
						self.pic.pop()
						console.log(self.pic);
					    }
				})
				
				// setTimeout(()=>{
				// 	self.refresh=true
				// },1000)
				
				// uni.showActionSheet({
				//     itemList: ['图片', '视频'],
				//     success: function (res) {
				//         if(res.tapIndex==0){
				// 			uni.chooseImage({
				// 				count:5,
				// 				sizeType: ['original', 'compressed'], 
				// 				success: function (res) {
				// 					res.tempFilePaths.forEach(function(e){
				// 						if(self.pic_index+self.vde_index>4){
				// 							uni.showToast({
				// 								title:"最多选五张",
				// 								icon:"none"
				// 							})
				// 							return false;
				// 						}
				// 						self.pic[self.pic_index]=e;
				// 						self.pic_index++;
				// 					})
				// 					console.log(self.pic_index);
				// 					console.log(self.pic);
				// 				    }
				// 			})
				// 		}
				// 		if(res.tapIndex==1){
				// 			uni.chooseVideo({
				// 				success:function(res){
				// 					self.vde[self.vde_index]=res.tempFilePath;
				// 					self.id[self.vde_index]=self.vde_index;
				// 					self.vde_index++;
				// 					console.log(self.vde)
				// 					console.log(self.id)
									
				// 				}
				// 			})
				// 		}
				//     }
				// });
				
				
			},
			delPic:(index)=>{
				let j=self.pic_index-index;
				for(var i=0; i<j;i++){
					self.pic[index+i]=self.pic[index+i+1];
					self.pic.splice(index+i+1,0)
				}
				self.pic.pop();
				self.pic_index--;
			},
			previewPic:(i,index)=>{
				self.preview=self.pic[i];
				uni.previewImage({
					current:index,
					urls:self.preview
				})
			},
			toBig:(index)=>{
				self.big=index;
			},
			playVideo:(index)=>{
					// self.vdecss="position: fixed; top: 0; left: 0; width: 750upx; height: 750upx; z-index: 100; margin:0;"
					self.big=index;
					self.previewvde=index;
					self.vdebutton=" position: fixed; bottom: 0;width: 100%;transition-duration: 0.2s;";
			},
			pauseVideo:()=>{
				self.vdebutton=" position: fixed; bottom: 0;width: 100%; z-index: 20;transition-duration: 0.2s; ";
			},
			stopVideo:()=>{
				self.big=-1;
				self.previewvde=-1;
				self.show=0;
				setTimeout(()=>{
					self.show=1;
				},1)
				
			},
			delVideo:(index)=>{
				self.big=-1;
				self.previewvde=-1;
				let j=self.vde_index-index;
				for(var i=0; i<j;i++){
					self.vde[index+i]=self.vde[index+i+1];
					self.vde.splice(index+i+1,0)
				}
				self.vde.pop();
				self.vde_index--;
				self.show=0;
				setTimeout(()=>{
					self.show=1;
				},1)
			},
			takenotes_submit:(e)=>{
				console.log(e);
			},
			addnotes:()=>{
				self.note++;
				self.takenotes.push(self.note)
				console.log(self.takenotes)
			},
			pickDate:(e)=>{
				self.date=e.detail.value;
			},
			pickGovernTime:(e)=>{
				self.governtime=e.detail.value;
			},
			pickTime:(e)=>{
				self.upordown_index=e.detail.value;
			},
			pickDateA:(e)=>{
				self.dateA=e.detail.value;
			},
			pickTimeA:(e)=>{
				self.upordown_Aindex=e.detail.value;
			},
			pickSamplingDate:(e)=>{
				self.samplingdate=e.detail.value;
			},
			pickSamplingTime:(e)=>{
				self.samptime_index=e.detail.value;
			},
			changeUser:(e)=>{
				self.index=e.detail.value;
				},
			nextModel1:()=>{
				self.show1=false;
				self.show2=true;
				self.lock2=true;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
				},
			nextModel2:()=>{
				self.show2=false;
				self.show3=true;
				self.lock3=true;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
				},
			showOption1:()=>{
				self.show1=true;
				self.show2=false;
				self.show3=false;
				self.lock2=false;
				self.lock3=false;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
				},
			showOption2:()=>{
				if(self.lock2){
					self.show1=false;
				self.show2=true;
				self.show3=false;
				self.lock3=false;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
				}else{
					uni.showToast({
						title: '请点击下一步',
						icon:"none"
					});
					setTimeout(()=>{
						uni.hideToast()
					},2000)
					uni.pageScrollTo({
					    scrollTop: 5000,
					    duration: 300
					});
				}
				
				},
			showOption3:()=>{
				if(self.lock3){
					self.show1=false;
					self.show2=false;
					self.show3=true;
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 300
					});
				}else{
					uni.showToast({
						title: '请点击下一步',
						icon:"none"
					});
					setTimeout(()=>{
						uni.hideToast()
					},2000)
					uni.pageScrollTo({
					    scrollTop: 5000,
					    duration: 300
					});
				}
				
				},
			moveHandle:()=>{
			},
			
			addInst:()=>{
				self.instNumber++;
				self.instArray.push(self.instNumber)
			},
			addSmap:()=>{
				self.smapNumber++;
				self.smapArray.push(self.smapNumber)
			},
			// getItemdata:(e)=>{
			// 	console.log(e)
			// 	uni.showModal({
			// 	    title: '提示',
			// 	    content: '点击确定后当前内容不可更改',
			// 	    success: function (res) {
			// 	        if (res.confirm) {
			// 	            self.item_show=true;
			// 	            self.item_array[self.item_index]= new Object;
			// 				self.item_array[self.item_index].itemName=e.detail.value.itemName;
			// 				self.item_array[self.item_index].itemName2=e.detail.value.itemName2;
			// 				self.item_array[self.item_index].itemMethod=e.detail.value.itemMethod;
			// 				self.item_array[self.item_index].itemRange=e.detail.value.itemRange;
			// 				self.item_indexarray.push(self.item_index)
			// 				self.item_index++;
			// 				console.log(self.item_array)
			// 	        } else if (res.cancel) {
			// 	            console.log('用户点击取消');
			// 	        }
			// 	    }
			// 	});
			// },
	// 		getInstrument:(e)=>{
	// 			console.log(e)
	// 			uni.showModal({
	// 			    title: '提示',
	// 			    content: '点击确定后当前内容不可更改',
	// 			    success: function (res) {
	// 			        if (res.confirm) {
	// 			            self.inst_show=true;
	// 			            self.inst_array[self.inst_index]= new Object;
	// 						self.inst_array[self.inst_index].instName=e.detail.value.instName;
	// 						self.inst_array[self.inst_index].instModel=e.detail.value.instModel;
	// 						self.inst_array[self.inst_index].instNumber=e.detail.value.instNumber;
	// 						self.inst_array[self.inst_index].instFactor=e.detail.value.instFactor;
	// 						self.inst_indexarray.push(self.inst_index)
	// 						self.inst_index++;
	// 						console.log(self.inst_array)
	// 			        } else if (res.cancel) {
	// 			            console.log('用户点击取消');
	// 			        }
	// 			    }
	// 			});
	// 		},
	// 		getContent:(e)=>{
	// 			console.log(e)
	// 			uni.showModal({
	// 			    title: '提示',
	// 			    content: '点击确定后当前内容不可更改',
	// 			    success: function (res) {
	// 			        if (res.confirm) {
	// 			            self.cont_show=true;
	// 			            self.cont_array[self.cont_index]= new Object;
	// 						self.cont_array[self.cont_index].samplingTime=e.detail.value.samplingTime;
	// 						self.cont_array[self.cont_index].sampleName=e.detail.value.sampleName;
	// 						self.cont_array[self.cont_index].sampleDescription=e.detail.value.sampleDescription;
	// 						self.cont_array[self.cont_index].surveyItem=e.detail.value.surveyItem;
	// 						self.cont_indexarray.push(self.cont_index)
	// 						self.cont_index++;
	// 						console.log(self.cont_array)
	// 			        } else if (res.cancel) {
	// 			            console.log('用户点击取消');
	// 			        }
	// 			    }
	// 			});
	// 		},
			
	}
	}
</script>

<style>
	.options{
		position: fixed;
		top: 0;
		width: 750upx;
		height: 150upx;
		background-color: #fff;
		z-index: 200;
	}
	.options_container{
		display: inline-block;
		width: 600upx;
		height: 120upx;
		margin: 15upx 75upx;
	}
	.option{
		display: inline-block;
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		font-size: 35upx;
		text-align: center;
		line-height: 120upx;
		background-color: #ccc;
		color: #fff;
	}
	.option_color{
		background-color: #00B4FF !important;
	}
	.hr{
		display: inline-block;
		width: 110upx;
		height: 20upx;
		background-color: #ccc;
	}
	.next{
		background-color: #00B4FF !important;
		width: 75%;
		margin-bottom: 5%;
	}
	.addtype{
		display: block;
		background-color: #00B4FF!important;
		font-size: 30upx;
		width: 180upx;
		height: 50upx;
		line-height: 50upx;
		float: right;
		margin-right: 5%;
		margin-top: 18upx;
		color: #fff;
	}
	.submit{
		width: 75%;
		background-color: #00B4FF;
		margin-bottom: 5%;
	}
</style>
