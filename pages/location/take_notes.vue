<template>
	<view class="takenotes_container" >
		<view :style="(big==-1)?'':'height:550px;overflow: hidden;'">
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
				<view v-show="submitted" v-for="n in takenotes">
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
									<!-- <image class="nochange_img" v-for="(p,index) in problem[n][0].pic_array" :src="p" mode="aspectFill" @click="previewImg(index,n)"></image> -->
									
									<view class="pic_container" v-for="(p,index) in problem[n][0].pic_array">
										<image class="pic" :src="p" mode="aspectFill" @click="previewImg(index,n)"></image>
									</view>
									
									<view class="pic_container" v-for="(v,index) in problem[n][0].vde_array">
						<video v-if="show==1"  class="vde" :src="v" controls :style="(big==-1)?'':(big==index)?'position: fixed; top: 0; left: 0; width: 750upx; margin:0;':'position: fixed; top: -1500upx;'" @play="playVideo(index)"   @pause="pauseVideo" @ended="pauseVideo"></video>
						<view v-show="previewvde==index" style="background-color: black;position: fixed; bottom: 0; left: 0; width: 100%;height: 750upx; z-index: 10;">
							<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
								
						<button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
							</view>
						</view>
					</view>
					
					
								</view>
							</view>
					</view>
				</view>
				<!-- 含有添加按钮的黑色大标题p199 -->
				<form @submit="addnotes" >
					<view class="add_headline">
						<text>问题</text>
						<button class="add_button" type="primary" form-type="submit">登记</button>
						<!-- image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image></ -->
					</view>
					<view class="basic_container">
				<text class="basic_title">主体:</text>
				<picker mode="selector" name="takenotes_main":range="array1" :value="index1" @change="changeMain1" >
					<view class="basic_picker">{{array1[index1]}}
						<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
					</view>
				</picker>
				</view>
				<view class="basic_container">
				<text class="basic_title">检查项:</text>
				<picker mode="selector" name="takenotes_checkitem" :range="array2" :value="index2" @change="changeMain2" >
				<view class="basic_picker">{{array2[index2]}}
					<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
				</view>
				</picker>
			</view>
				<view class="basic_container">
					<text class="basic_title">问题描述:</text>
					<picker mode="selector" name="takenotes_problem" :range="array3" :value="index3" @change="changeMain3" >
					<view class="basic_picker">{{array3[index3]}}
						<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
					</view>
					</picker>
				</view>
					<!-- 表单多行文本、照片存放框基础样式p227 -->
				<view class="basic_container2">
					<text class="basic_title">补充说明:</text>
					<textarea class="textarea" :value="moreinfo_value" name="moreinfo" />
				</view>
				<view class="basic_container2">
				<text class="basic_title">现场照片/视频(可选五张)</text>
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
				</form>
				
				<!-- form表单基础样式输入框、下拉框、显示内容、单选p116 -->
			
			
			
			
			
				</view>
				<!-- <view class="date_container">
					<view class="basic_title">登记时间:</view>
					<picker name="b" mode="date" :value="date" @change="pickDate">
						<view class="date position">{{date}}</view>
					</picker>
					</picker>
				</view> -->
				<view class="basic_container">
					<text class="basic_title">承建商:</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">责任单位:</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_headline">
					<text>检查依据</text>
				</view>
				<view class="basic_container3"></view>
				<view class="basic_headline">
					<text>标准规范</text>
				</view>
				<view class="basic_container3"></view>
				<view class="basic_headline">
					<text>查验声明</text>
				</view>
				<view class="basic_container3"></view>
				<button class="submit" form-type="submit" type="primary">提交</button>
			</form>
		</view>
				
		
	</view>
</template>

<script>
	var self;
	var year,month,day,time;
	export default{
		onLoad() {
			self=this;
			// self.time=new Date();
			// self.year=self.time.getFullYear();
			// self.month=self.time.getMonth()+1;
			// self.day=self.time.getDate();
			// self.date=self.year+"-"+self.month+"-"+self.day; 
			// console.log(self.date)
		},
		data(){
			return{
				array1:[
					"客厅","房间","厨房","厕所"
				],
				array2:[
					"插座","水管","电线"
				],
				array3:[
					"墙壁不平整","房间墙壁有脱皮"
				],
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
				moreinfo_value:"    ",
				piclist:[
						"/static/1.jpeg",
						"/static/126.jpg",
						"/static/131.jpg",
						"/static/153.jpg",
						"/static/166.jpg"
						]
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
				uni.showActionSheet({
				    itemList: ['图片', '视频'],
				    success: function (res) {
				        if(res.tapIndex==0){
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
						}
						if(res.tapIndex==1){
							uni.chooseVideo({
								success:function(res){
									self.vde[self.vde_index]=res.tempFilePath;
									self.id[self.vde_index]=self.vde_index;
									self.vde_index++;
									console.log(self.vde)
									console.log(self.id)
									
								}
							})
						}
				    }
				});
				
				
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
				self.preview[0]=self.pic[index];
				uni.previewImage({
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
				console.log(e);
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
			}
		}
	}
</script>

<style>
</style>
