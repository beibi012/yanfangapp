<template>
	<view style="background-color: #ccdfee;">
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="submit">
				<view class="basic_headline">
					<text>监测信息</text>
				</view>
				<view class="basic_container">
					<text class="basic_title">项目名称</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">委托方信息</text>
					<text class="basic_content"></text>
				</view>
				<view class="basic_container">
					<text class="basic_title">姓名</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">地址</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">联系人</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">联系电话</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">受检方信息</text>
					<text class="basic_content"></text>
				</view>
				<view class="basic_container">
					<text class="basic_title">姓名</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">地址</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">联系人</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">联系电话</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">监测来源</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">分析时间</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title">分析条件</text>
					<input class="basic_input" name="bi_client" type="text" value="" >
				</view>
				<view class="basic_container">
					<text class="basic_title"></text>
					<text class="basic_content"></text>
				</view>
				<view class="basic_headline">
					<text>现场动态</text>
				</view>
				<view class="basic_container2">
					<text class="basic_title">上传现场照片</text>
					<view class="picture">
						<view class="pic_container" v-for="(p,index) in pic">
							<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
							<view class="del" @click="delPic(index)"><view>x</view></view>
						</view>
						<view class="addpic"   @click="addPic"><text>+</text></view>
					</view>
					<text class="basic_title">备注</text>
					<textarea class="textarea" value="" :name="'moreinfo'+note" />
					</view>
					<view class="basic_headline">
						<text>监测项目及其方法</text>
					</view>
					<view class="basic_container">
						<text class="basic_title">监测项目</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title"></text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container2">
						<text class="basic_title2">分析方法</text>
						<textarea class="textarea2" value="" :name="'moreinfo'+note" />
					</view>
					<view class="basic_container">
						<text class="basic_title">浮动范围</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_headline">
						<text>仪器设备</text>
					</view>
					<view class="basic_container">
						<text class="basic_title">仪器1</text>
						<text class="basic_content"></text>
					</view>
					<view class="basic_container">
						<text class="basic_title">仪器名称</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">规格型号</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">出厂编号</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">监测因子</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_headline">
						<text>监测内容</text>
					</view>
					<view class="basic_container">
						<text class="basic_title">内容1</text>
						<text class="basic_content"></text>
					</view>
					<view class="basic_container">
						<text class="basic_title">采样时间</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">样品名称</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">样品描述</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">监测项目</text>
						<input class="basic_input" name="bi_client" type="text" value="" >
					</view>
					<view class="basic_headline">
						<text>监测结果</text>
					</view>
					<view class="basic_container2">
						<text class="basic_title2">检测结果</text>
						<textarea class="textarea2" value="" :name="'moreinfo'+note" />
					</view>
					<view class="basic_headline removebottomline">
						<text>空气问题反馈</text>
					</view>
					<view class="basic_container2">
						<textarea class="textarea" value="" :name="'moreinfo'+note" />
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
