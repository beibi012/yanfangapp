<template>
	<view :style="(big==-1)?'':'height:550px;overflow: hidden;'">
		<scroll-view scroll-y="true" >
			<view> 
						<view class="basic_container" style="border-top: 1px solid #ddd;">
							<text class="basic_title" style="font-size: 35upx;font-weight: bold;color: #333;">用户类型</text>
							<text class="basic_contentb">个人</text>
							</view>
						<view class="basic_headline">
							<text>检测信息</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">项目名称</text>
							<text class="basic_contentb">{{data.projectName}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_titleblod" style="color: #666;">委托方信息</text>
							<text class="basic_contentb"></text>
						</view>
						<view class="basic_container">
							<text class="basic_title">姓名</text>
							<text class="basic_contentb">{{data.homeCustomers[0].name}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">地址</text>
							<text class="basic_contentb">{{data.homeCustomers[0].address}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">面积</text>
							<text class="basic_contentb">{{data.homeCustomers[0].remark}}㎡</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">联系人</text>
							<text class="basic_contentb">{{data.homeCustomers[0].contactName}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">联系电话</text>
							<text class="basic_contentb">{{data.homeCustomers[0].phone}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_titleblod" style="color: #666;">受检方信息</text>
							<text class="basic_content"></text>
						</view>
						<view class="basic_container">
							<text class="basic_title">姓名</text>
							<text class="basic_contentb">{{data.homeCustomers[1].name}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">地址</text>
							<text class="basic_contentb">{{data.homeCustomers[1].address}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">联系人</text>
							<text class="basic_contentb">{{data.homeCustomers[1].contactName}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">联系电话</text>
							<text class="basic_contentb">{{data.homeCustomers[1].phone}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_titleblod" style="color: #666;">检测来源</text>
							<text class="basic_contentb">{{data.monitoringSource}}</text>
						</view>
						
						<view class="basic_container">
							<text class="basic_titleblod" style="color: #666;">温度</text>
							<text class="basic_contentb">{{data.temperature}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_titleblod" style="color: #666;">湿度</text>
							<text class="basic_contentb">{{data.humidity}}</text>
						</view>
			
					
				
				<view style="position: relative;">
					
						<view v-for="(item,i) in data.homeMonitoringItems">
							<view class="basic_headline">
								<text>检测项目及其方法</text>
							</view>
							<view class="basic_container" >
								<text class="basic_title" style="color: #333;">检测项目{{i+1}}</text>
								<text class="basic_contentb">{{item.monitoringItem}}</text>
								
							</view>
							<view class="basic_container2 side" >
								<text class="basic_title" style="color: #333;margin-left: 0!important;">分析方法</text>
								<text class="basic_contentb" style="white-space: normal; min-height: 80upx;overflow: inherit;line-height: 40upx;margin-top: 20upx;font-size: 30upx;">{{item.analyzeCondition}}</text>
							</view>
							<view class="basic_headline">
								<text>现场动态</text>
							</view>
							<view class="basic_container2">
								<text class="basic_title">现场照片{{i+1}}</text>
								<view class="picture" >
									<view class="pic_container" v-for="(p,index) in pic[i]" >
										<image class="pic" :src="p" mode="aspectFill" @click="previewPic(i,index)"></image>
										
									</view>
									
									
								</view>
								</view>
								<view class="basic_container2 side" style="padding-bottom: 5%;width: 96%; margin: 0 2%;">
									<text class="basic_title" style="color: #333;margin-left: 0!important;">备注</text>
									<text class="basic_contentb" style="white-space: normal; min-height: 80upx;overflow: inherit;line-height: 40upx;margin-top: 20upx;font-size: 30upx;">{{item.remark}}</text>
								</view>
					
							
						</view>
						<!-- <view class="basic_container">
							<text class="basic_title"></text>
							<text class="basic_content"></text>
						</view> -->
						
				</view>
				
					
					<view >
							
						
							<view class="basic_headline">
								<text>仪器设备</text>
							</view>
							<view v-for="(inst,index) in data.homeEquipments" style="border-bottom: 1px solid #ddd;">
							<view class="basic_container">
								<text class="basic_title">仪器名称{{index+1}}</text>
								<text class="basic_contentb">{{inst.name}}</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">规格型号{{index+1}}</text>
								<text class="basic_contentb">{{inst.type}}</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">出厂编号{{index+1}}</text>
								<text class="basic_contentb">{{inst.factoryCode}}</text>
							</view>
							<view class="basic_container">
								<text class="basic_title">检测因子{{index+1}}</text>
								<text class="basic_contentb">{{inst.itemId}}</text>
							</view>
							</view>
					
						<view class="basic_headline">
							<text>检测内容</text>
						</view>
						<view v-for="(smap,index) in data.homeMonitoringContents" style="border-bottom: 1px solid #ddd;">
							<view class="basic_container">
								<text class="basic_title">检测项目{{index+1}}</text>
								<text class="basic_contentb">{{smap.monitoringItem}}</text>
							</view>
							
							
						<view class="basic_container">
							<text class="basic_title">样品名称{{index+1}}</text>
							<text class="basic_contentb">{{smap.sampleName}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">样品描述{{index+1}}</text>
							<text class="basic_contentb">{{smap.sampleDescription}}</text>
						</view>
						
						</view>
					
					<view class="basic_headline">
						<text>检测结果</text>
					</view>
					<view class="basic_container2 side">
						<!-- <text class="basic_title" style="color: #333;">检测结果</text> -->
						<text class="basic_contentb" style="white-space: normal; min-height: 80upx;overflow: inherit;line-height: 40upx;margin-top: 20upx;font-size: 30upx;">{{data.monitoringResult}}</text> 
					</view>
					<view class="basic_headline">
						<text>空气问题反馈</text>
					</view>
					<view class="basic_container2 side">
						<text class="basic_contentb" style="white-space: normal; min-height: 80upx;overflow: inherit;line-height: 40upx;margin-top: 20upx;font-size: 30upx;">{{data.airProblem}}</text>
						</view>
						<view class="basic_headline removebottomline">
							<text>治理时间:</text>
							<text class="basic_contentb"> {{data.monGovernTime.replace(","," ")}}</text>
						</view>
						<!-- <view class="basic_container">
							<text class="basic_title"></text>
							<text class="basic_content"></text>
						</view> -->
					</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	var self;
	var year,month,day,time;
	export default{
		onLoad(e) {
			self=this;
			console.log(e.data)
			self.data=JSON.parse(e.data)
			console.log(self.data)
			for (let i = 0; i < self.data.homeMonitoringItems.length; i++) {
			self.pic[i]=self.data.homeMonitoringItems[i].nowFilePath.split(",")
			console.log(self.pic)
			console.log(self.pic[i])
			}
			// self.time=new Date();
			// self.year=self.time.getFullYear();
			// self.month=self.time.getMonth()+1;
			// self.day=self.time.getDate();
			// self.date=self.year+"-"+self.month+"-"+self.day; 
			// self.dateA=self.year+"-"+self.month+"-"+self.day; 
			// self.samplingdate=self.year+"-"+self.month+"-"+self.day; 
			// self.pic[self.pic_index]=[]
			// self.index_array[self.pic_index]=0
			
			// for (var i = 0; i < 25; i++) {
			// 	let hour=i.toString()+":00"
			// 	self.hours.push(hour)
			// }
			// console.log(self.date)
			// uni.getStorage({
			//     key: 'cookies',
			//     success: function (res) {
			// 		self.cookies=res.data;
			// 		console.log("监测获取到cookies值为:"+self.cookies);
			//     }
			// });
			// uni.getStorage({
			//     key: 'option1',
			//     success: function (res) {
			//         console.log(res.data);
			// 		self.option1=res.data;
			// 		self.index=self.option1.roleId;
			// 		self.dateA=self.option1.analyzeTime;
			// 		self.upordown_Aindex=self.option1.analyzeTime_ud;
			// 		self.lock2=true;
			//     }
			// });
			// uni.getStorage({
			//     key: 'option2',
			//     success: function (res) {
			//         console.log(res.data);
			// 		self.option2=res.data;
			// 		self.itemArray=self.option2.itemArray;
			// 		self.lock3=true;
			//     }
			// });
		},
		data(){
			return{
				data:{},
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
	.side{
		width: 96%!important;
		margin: 0 2%!important;
	}
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
