<template>
	<!-- 不合格页面p899 -->
	<view class="fail_container">
		<form @submit="failSubmit">
			<view class="basic_container2">
				<text class="basic_title">不合格原因</text>
				<textarea class="textarea" value="" name="whyfail" />
			</view>
			<view class="basic_container2">
				<text class="basic_title">添加照片/视频(可选五张)</text>
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
					<view class="addpic"   @click="addPic">
						<image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image>
						</view>
				</view>
				</view>
			<button class="submit" type="primary" form-type="submit" @click="navigateBack">提交</button>
		</form>
		
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
			console.log(self.date)
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
				takenotes:[1],
				note:1,
				date:""
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
			navigateBack:()=>{
				uni.navigateBack({
					delta: 2
				});
			}
		}
	}
</script>

<style>
</style>
