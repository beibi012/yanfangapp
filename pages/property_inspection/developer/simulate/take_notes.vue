<template>
	<view class="takenotes_container" >
		<view class="takenotes" :style="(big==-1)?'':'height:550px;overflow: hidden;'">
			<form @submit="takenotes_submit">
			<!-- 黑色大标题样式p188 --> 
			<!-- <view class="basic_headline"> 
				<text>基础信息</text>
			</view> -->
			<!-- form表单基础样式输入框、下拉框、显示内容、单选p116 -->
			<!-- <view>
				<view class="basic_container">
					<text class="basic_title">委托人/单位:</text>
					<text class="basic_content">陈志诚</text>
				</view>
				<view class="basic_container">
					<text class="basic_title">项目名称:</text>
					<text class="basic_content">8号楼房间和公区查验</text>
				</view>
				<view class="basic_container">
					<text class="basic_title">单元房号:</text>
					<text class="basic_content">8号楼房间-5-1-501</text>
				</view>
				<view class="basic_container">
					<text class="basic_title">装修程度:</text>
					<text class="basic_content">精装房</text>
				</view>
				<view class="basic_container">
					<text class="basic_title">建筑面积:</text>
					<text class="basic_content">143㎡</text>
				</view>
				
			</view> -->
			<view>
				<!-- <view v-show="submitted" v-for="n in takenotes">
					<view class="basic_headline" style="font-size: 30upx; color: #666;">
						<text>已登记问题{{n+1}}</text>
					</view>
					<view class="basic_problem">
						<view class="basic_container">
							<text class="basic_title">主体:</text>
							<text class="basic_content">{{problem[n][0].takenotes_main}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">检查项:</text>
							<text class="basic_content">{{problem[n][0].takenotes_checkitem}}</text>
						</view>
						<view class="basic_container">
							<text class="basic_title">问题描述:</text>
							<text class="basic_content">{{problem[n][0].takenotes_problem}}</text>
						</view>
						<view class="basic_container" style="overflow: inherit; height: 100%;">
							<text class="basic_title">补充说明:</text>
							<text class="basic_content" style="white-space: normal; min-height: 80upx;overflow: inherit;line-height: 40upx;margin-top: 20upx;">{{problem[n][0].moreinfo}}</text>
						</view>
							<view class="basic_container2">
								<text class="basic_title">整改前照片</text>
								<view class="picture">
									
									<view class="pic_container" v-for="(p,index) in problem[n][0].pic_array">
										<image class="pic" :src="p" mode="aspectFill" @click="previewImg(index,n)"></image>
									</view>
									
									<view class="pic_container" v-for="(v,index) in problem[n][0].vde_array">
						<video v-if="show==1"  class="vde" :src="v" controls :style="(big==-1)?'':(big==index)?'position: fixed; top: 0; left: 0; width: 750upx; margin:0;':'position: fixed; top: -1500upx;'" @play="playVideo(index)"   @pause="pauseVideo" @ended="pauseVideo"></video>
						<view v-show="previewvde==index" style="background-color: black;position: fixed; bottom: 0; left: 0; width: 100%;height: 750upx; z-index: 10;">
							<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
								
						<!-- <button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
							</view>
						</view>
					</view>
								</view>
							</view>
					</view>
				</view> --> 
				<!-- 含有添加按钮的黑色大标题p199 -->
				<!-- <form @submit="addnotes" > -->
					<view class="add_headline">
						<text>选择问题</text>
						<!-- <button class="add_button" type="primary" form-type="submit">登记</button> -->
						<!-- image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image></ -->
					</view>
					<navigator class="describe" @click="choiceProblem" :url="'new_problem?main='+main+'&item='+item+'&describe='+describe">
						<view class="describe_content title">
							问题描述
						</view>
						<view class="describe_content cont">
							{{pr}}
						</view>
						<image class="right" src="/static/Getinto@3x.png" mode="widthFix"></image>
					</navigator>
					<navigator class="describe" url="search">
						<view class="describe_content title">
							责任单位
						</view>
						<view class="describe_content cont">
							{{company}}
						</view>
						<image class="right" src="/static/Getinto@3x.png" mode="widthFix"></image>
					</navigator>
					
					<!-- <view class="basic_container">
				<text class="basic_title">主体:</text>
				<picker mode="selector" name="takenotes_main":range="array1" :value="index1" @change="changeMain1" >
					<view class="basic_picker">{{array1[index1]}}
						<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
					</view>
				</picker>
				</view> -->
				<!-- <view class="basic_container">
				<text class="basic_title">检查项:</text>
				<picker mode="selector" name="takenotes_checkitem" :range="array2" :value="index2" @change="changeMain2" >
				<view class="basic_picker">{{array2[index2]}}
					<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
				</view>
				</picker>
			</view> -->
				<!-- <view class="basic_container">
					<text class="basic_title">问题描述:</text>
					<picker mode="selector" name="takenotes_problem" :range="array3" :value="index3" @change="changeMain3" >
					<view class="basic_picker">{{array3[index3]}}
						<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
					</view>
					</picker>
				</view> -->
					<!-- 表单多行文本、照片存放框基础样式p227 -->
				<view class="basic_container2">
					<text class="basic_title">补充说明:</text>
					<textarea style="font-size: 30upx;" class="textarea" :value="moreinfo_value" name="moreinfo" />
				</view>
				<view class="basic_container2">
				<text class="basic_title">现场照片(可选五张)</text>
				<view class="picture">
					<view class="pic_container" v-for="(p,index) in pic">
						<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
						<view class="del" @click="delPic(index)"><image class="del_img" src="/static/delete@2x.png" mode="widthFix"></image></view>
					</view>
					<view class="pic_container" v-for="(v,index) in vde">
						<video v-if="show==1"  class="pic" :src="v" controls :style="(big==-1)?'':(big==index)?'position: fixed; top: 0; left: 0; width: 750upx; margin:0;':'position: fixed; top: -1500upx;'" @play="playVideo(index)"   @pause="pauseVideo" @ended="pauseVideo"></video>
						<view v-show="previewvde==index" style="background-color: black;position: fixed; bottom: 0; left: 0; width: 100%;height: 750upx; z-index: 10;">
							<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
								<button type="warn" style=" width: 100%;" @click="delVideo(index)">重新拍摄/选择</button>
						<button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
							</view>
						</view>
					</view>
					<view class="addpic"  form-type="submit"  @click="addPic">
						<image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image>
						</view>
				</view>
				</view>
				</view>
				<!-- <view class="date_container">
					<view class="basic_title">登记时间:</view>
					<picker name="b" mode="date" :value="date" @change="pickDate">
						<view class="date position">{{date}}</view>
					</picker>
					</picker>
				</view> -->
				<!-- <view class="basic_container">
					<text class="basic_title">承建商:</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view> -->
				<!-- <view class="basic_container">
					<text class="basic_title">责任单位:</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view> -->
				<!-- <view class="basic_headline">
					<text>检查依据</text>
				</view>
				<view class="basic_container3"></view>
				<view class="basic_headline">
					<text>标准规范</text>
				</view>
				<view class="basic_container3"></view>
				<view class="basic_headline">
					<text>查验声明</text>
				</view> -->
				<!-- <view class="basic_container3"></view> -->
				<view style="margin-bottom: 2%;margin-left: 2%;color: #FFA500;font-size: 30upx;">
					<checkbox-group @change="isUrgent">
						<label>
							<checkbox value="urgent"/><text>是否加急</text>
						</label>
					</checkbox-group>
				</view>
				<button class="submit" form-type="submit" type="primary">提交</button>
			</form>
		</view>
			<!-- <view class="choice" :class="toright">
				<scroll-view class="left">
					<view class="list_title" >{{main}}</view>
					<view class="list_title" >{{item}}</view>
					<view class="list_title" >{{describe}}</view>
				</scroll-view>
				<scroll-view class="right">
					<view class="list_content" v-for="m in array4"  @click="choiceMain(m)">{{m}}</view>
				</scroll-view>
			</view> -->
		
	</view>
</template>

<script>
	var self;
	var year,month,day,time;
	export default{
		onLoad(e) {
			self=this;
			console.log(e)
			self.psId=e.psId;
			console.log(self.psId)
			
			console.log(self.obj)
			// self.time=new Date();
			// self.year=self.time.getFullYear();
			// self.month=self.time.getMonth()+1;
			// self.day=self.time.getDate();
			// self.date=self.year+"-"+self.month+"-"+self.day; 
			// console.log(self.date)
		},
		onShow() {
			uni.$on('company',function(data){
			        console.log('company携带参数 msg 为：' + data.msg);
					self.company=data.msg
					console.log(self.company)
			})
			uni.$on('problem',function(data){
			        console.log('problem 携带参数 msg 为：' + data.msg);
					self.obj=data.msg
					console.log(self.obj)
					self.pr=self.obj.main+"-"+self.obj.item+"-"+self.obj.describe
					self.main=self.obj.main
					self.item=self.obj.item
					self.describe=self.obj.describe
			})	
		},
		data(){
			return{
				psId:"",
				cookies:"",
				imgList:"",
				chioce:true,
				array1:[
					"客厅","房间","厨房","厕所"
				],
				array2:[
					"墙纸","电器设施","墙面","石材、瓷砖","木地板","渗漏类","天花","窗"
				],
				array3:[
					"不平整","长毛、发霉","涂料破损","开裂","空鼓","其他",
				],
				array4:[],
				index_p:0,
				main:"",
				item:"",
				describe:"",
				obj:{},
				pr:"选择部位部品描述",
				company:"选择责任单位",
				index1:0,
				index2:0,
				index3:0,
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
				takenotes:[],
				note:0,
				date:"",
				submitted:false,
				problem:[],
				obj_array:[],
				newobj:{},
				moreinfo_value:"",
				toleft:"toleft",
				toright:"toright",
				urgent:"",
				uploadindex:0,
			}
		},
		methods:{
			changeMain1:(e)=>{
				self.index1=e.detail.value;
			},
			changeMain2:(e)=>{
				self.index2=e.detail.value;
			},
			changeMain3:(e)=>{
				self.index3=e.detail.value;
			},
			addPic:()=>{
				uni.chooseImage({
					count:5,
					sizeType: ['original', 'compressed'], 
					success: function (res) {
						res.tempFilePaths.forEach(function(e){
							if(self.pic_index+self.vde_index>4){
								uni.showToast({
									title:"最多选五张",
									icon:"none"
								})
								return false;
							}
							self.pic[self.pic_index]=e;
							self.pic_index++;
						})
						console.log(self.pic_index);
						console.log(self.pic);
					    }
				})
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
			previewPic:(index)=>{ 
				self.preview=self.pic;
				uni.previewImage({
					current:index,
					urls:self.preview
				})
			},
			previewImg:(index,n)=>{
				self.preview[0]=self.problem[n][0].pic_array[index];
				uni.previewImage({
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
				console.log(e.detail.value);
				uni.getStorage({
				    key: 'cookies',
				    success: function (res) {
						self.cookies=res.data;
						console.log("监测获取到cookies值为:"+self.cookies);
				    }
				});
				const app = getApp()
				console.log(app.globalData.ctx)
				if(self.pic[0]!==undefined){
					console.log("有图片")
					for(let i =0; i<self.pic.length;i++){
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
									self.imgList=self.imgList+imgId
									console.log(self.imgList);
									self.uploadindex++
						        },
								fail: () => {
									uni.showToast({
										title: '上传失败'
									});
								},
								complete:()=>{
									
									if(self.uploadindex==self.pic.length){
										self.imgList=self.imgList.substring(0,self.imgList.length-1)
										console.log(self.imgList)
										uni.request({
											url:app.globalData.ctx+ '/home/problem/rs/addProblemdescribeSave',
											header:{
												'Content-type':'application/json',
												'Cookie':self.cookies
											},
											method: 'post',
											data: {
												"pdLoca": self.obj.main,
												"pdLocation": self.obj.item,
												"pdContent": self.obj.describe,
												"pdAdded": e.detail.value.moreinfo,
												"pdAccountabilityUnit": self.company,//暂存责任单位
												"pdState":"1",
												"psId": self.psId,
												"pdPhotoa": self.imgList,
												"pdStatus": self.urgent,
											},
											success: res => {
												console.log(res)
												uni.showToast({
												    title: '上传成功',
													icon:'none'
												});
												uni.showModal({
												    title: '提示',
												    content: '是否添加新问题',
													confirmText:'添加',
													cancelText:'不添加',
													cancelColor:"#f00",
												    success: function (res) {
												        if (res.confirm) {
												            console.log('用户点击确定');
															self.moreinfo_value=""
															self.index1=0
															self.index2=0
															self.index3=0
															self.pic=[]
															self.pic_index=0
															self.imgList=[]
															uni.pageScrollTo({
															    scrollTop: 0,
															    duration: 300
															});
												        } else if (res.cancel) {
												            console.log('用户点击取消');
															uni.navigateBack({
																delta: 1
															});
												        }
												    }
												});
											},
											fail: () => { 
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
									}
									
								}
						    });
					}
					
					}else{
					console.log("没有图片")
					uni.showModal({
					    title: '提示',
					    content: '是否确定不添加图片',
					    success: function (res) {
					        if (res.confirm) {
								uni.request({
									url:app.globalData.ctx+ '/home/problem/rs/addProblemdescribeSave',
									header:{
										'Content-type':'application/json',
										'Cookie':self.cookies
									},
									method: 'post',
									data: {
										"pdLoca": self.array1[e.detail.value.takenotes_main],
										"pdLocation": self.array2[e.detail.value.takenotes_checkitem],
										"pdContent": self.array3[e.detail.value.takenotes_problem],
										"pdAdded": e.detail.value.moreinfo,
										"pdPhotobs":self.imgList
									},
									success: res => {
										console.log(res)
										uni.showToast({
										    title: '上传成功',
											icon:'none'
										});
										uni.showModal({
										    title: '提示',
										    content: '是否添加新问题',
											confirmText:'添加',
											cancelText:'不添加',
											cancelColor:"#f00",
										    success: function (res) {
										        if (res.confirm) {
										            console.log('用户点击确定');
													self.moreinfo_value=""
													self.index1=0
													self.index2=0
													self.index3=0
													uni.pageScrollTo({
													    scrollTop: 0,
													    duration: 300
													});
										        } else if (res.cancel) {
										            console.log('用户点击取消');
													uni.navigateBack({
														delta: 1
													});
										        }
										    }
										});
										
									},
									fail: () => { 
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
					            
					        }else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					
				}
			},
			addnotes:(e)=>{
				uni.showModal({
				    title: '提示',
				    content: '点击确定后问题不可更改,可添加新问题',
				    success: function (res) {
				        if (res.confirm) {
				            console.log(self.note);
				            self.obj_array[self.note]= new Object;
				            self.obj_array[self.note].takenotes_main=self.array1[e.detail.value.takenotes_main];
				            self.obj_array[self.note].takenotes_checkitem=self.array2[e.detail.value.takenotes_checkitem];
				            self.obj_array[self.note].takenotes_problem=self.array3[e.detail.value.takenotes_problem];
				            self.obj_array[self.note].moreinfo=e.detail.value.moreinfo;
				            self.obj_array[self.note].pic_array=self.pic.concat();
				            self.obj_array[self.note].vde_array=self.vde.concat();
				            self.obj=JSON.parse(JSON.stringify(self.obj_array[self.note]))
				            self.problem[self.note] = new Array;
				            self.problem[self.note].push(self.obj);
				            console.log(self.problem);
				            self.takenotes.push(self.note)
				            self.note++;
				            self.submitted=true;
				            self.pic.length=0;
				            self.vde.length=0;
				            self.pic_index=0;
				            self.vde_index=0;
				            self.moreinfo_value="";
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			pickDate:(e)=>{
				self.date=e.detail.value;
			},
			choiceProblem:()=>{
				self.toright="toleft";
				self.array4=self.array1
				self.index_p=0
				console.log(self.obj)
			},
			choiceMain:(m)=>{
				console.log(m)
				if(self.index_p==0){
					self.main=m
					self.array4=self.array2
					self.index_p++
					return
				}
				if(self.index_p==1){
					self.item=m
					self.array4=self.array3
					self.index_p++
					return
				}
				if(self.index_p==2){
					self.describe=m
					self.index_p++
					self.pr=self.main+"-"+self.item+"-"+self.describe
					self.toright="toright";
				}
			},
			isUrgent:(e)=>{
				console.log(e)
				if(e.detail.value=="urgent"){
					self.urgent=0
					console.log(self.urgent)
				}else{
					self.urgent=1
					console.log(self.urgent)
				}
				
			}
		}
	}
</script>

<style>
	.takenotes_container{
		display: flex;
		width: 1500upx;
	}
	.takenotes{
		display: flex;
	}
	.describe{
		position: relative;
		width: 750upx;
		height: 150upx;
		border-bottom: #ddd 1px solid;
	}
	.describe_content{
		height: 75upx;
		line-height: 75upx;
		padding-left: 2%;
		font-size: 30upx;
	}
	.describe .title{
		color: #333;
	}
	.describe .cont{
		color: #999;
	}
	.describe .right{
		position: absolute;
		width: 50upx;
		right: 0;
		top: 40upx;
	}
	.choice{
		display: flex;
		position: absolute;
		top: 0;
		left: 750upx;
		width: 750upx;
		height: 100vh;
		z-index: 100;
		background-color: #fff;
		border: #00B4FF 1px solid;
	}
	.choice .left{
		width: 40%;
		display: flex;
		border: #00B4FF 1px solid;
	}
	.choice .left .list_title{
		display: flex;
		width: 100%;
		height: 15vh;
		line-height: 15vh;
		justify-content : center;
		color: #333;
		font-size: 35upx;
		border: red 1px solid;
	}
	.choice .right{
		display: flex;
		border: #4CD964 1px solid;
		width: 60%;
	}
	.choice .right .list_content{
		display: flex;
		width: 100%;
		height: 10vh;
		line-height: 10vh;
		justify-content : center;
		color: #333;
		font-size: 35upx;
		border: pink 1px solid;
	}
	.toleft{
		transition:0.3s;
		left: 0;
	}
	.toright{
		transition:0.3s;
		left: 750upx;
	}
</style>
