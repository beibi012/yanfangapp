<template>
	<view style="background-color: #ccdfee;"> 
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="">
				<view class="basic_container2">
					<text class="basic_title">治理过程(上传图片或视频)</text>
					<view class="picture">
						<view class="pic_container" v-for="(p,index) in pic">
							<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
							<view class="del" @click="delPic(index)"><view>x</view></view>
						</view>
						<view class="addpic"   @click="addPic"><text>+</text></view>
					</view>
					</view>
					<view class="basic_headline removebottomline">
						<text>治理时间</text>
					</view>
					<!-- 日期样式p1156 -->
					<view class="date_container">
						<view>当前选择</view>
						<picker name="b" mode="date" :value="date" @change="pickDate">
							<view class="date">{{date}}</view>
						</picker>
						<picker name="a" :value="upordown_index" :range="upordown" @change="pickTime">
							<view class="time">{{upordown[upordown_index]}}</view>
						</picker>
					</view>
					<button form-type="submit" type="primary">提交</button>
					</form>
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
			console.log(self.date)
		},
		data(){
			return{
				pic_index:0,
				pic:[],
				preview:[],
				del:[],
				wh:"",
				takenotes:[1],
				note:1,
				date:"",
				upordown:["上午","下午"],
				upordown_index:0
			}
		},
		methods:{
			submit:(e)=>{
				console.log(e)
			},
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
										if(self.pic_index>4){
											console.log("aa")
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
									self.pic[self.pic_index]=res;
									self.pic_index++;
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
			playVideo:()=>{
				self.wh="width: 750upx;height: 750upx;position: absolute; top:600upx;left:0;;z-index:20;"
				
			},
			endVideo:()=>{
				self.wh="";
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
			pickTime:(e)=>{
				self.upordown_index=e.detail.value;
			},
		}
	}
</script>

<style>
</style>
