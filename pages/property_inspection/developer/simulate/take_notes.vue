<template>
	<view class="takenotes_container">
		<form @submit="takenotes_submit">
		<view class="tn_title">
			<text>基础信息</text>
		</view>
		<view class="basic_problem">
			<view class="basic_container">
				<text class="basic_title">委托人/单位</text>
				<text class="basic_content">陈志诚</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">项目名称</text>
				<text class="basic_content">8号楼房间和公区查验</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">单元房号</text>
				<text class="basic_content">8号楼房间-5-1-501</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">装修程度</text>
				<text class="basic_content">精装房</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">建筑面积</text>
				<text class="basic_content">143平</text>
			</view>
			
		</view>
		<view class="add_title">
			<text>登记问题</text>
			<view class="addnotes" @click="addnotes"><text>+</text></view>
		</view>
		<view class="prob_container" v-for="note in takenotes">
		<view class="basic_container">
			<text class="basic_title">主体</text>
			<picker mode="selector" :name="'takenotes_main' +note":range="array1" :value="index1" @change="changeMain1" >
			<view class="picker">{{array1[index1]}}
			<view class="arrow">
				<view class="arrowbottom"></view>
				</view>
				</view>
			</picker>
			</view>
		<view class="basic_container">
			<text class="basic_title">检查项</text>
			<picker mode="selector" :name="'takenotes_checkitem'+note" :range="array2" :value="index2" @change="changeMain2" >
			<view class="picker">{{array2[index2]}}
			<view class="arrow">
				<view class="arrowbottom"></view>
				</view>
				</view>
			</picker>
		</view>
		<view class="basic_container">
			<text class="basic_title">问题描述</text>
			<picker mode="selector" :name="'takenotes_problem'+note" :range="array3" :value="index3" @change="changeMain3" >
			<view class="picker">{{array3[index3]}}
			<view class="arrow">
				<view class="arrowbottom"></view>
				</view>
				</view>
			</picker>
		</view>
		<view class="basic_container2">
			<text class="basic_title">补充说明</text>
			<textarea class="textarea" value="" :name="'moreinfo'+note" />
			<text class="basic_title">现场照片/视频(可选五张)</text>
			<view class="picture">
				<view class="pic_container" v-for="(p,index) in pic">
					<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
					<view class="del" @click="delPic(index)"><view>x</view></view>
				</view>
				<view class="addpic"   @click="addPic"><text>+</text></view>
			</view>
			</view>
			<view class="basic_container">
				<text class="basic_title">登记时间</text>
				<text class="basic_title">2019-3-26</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">承建商</text>
				<text class="basic_title">南宁大大地产商</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">责任单位</text>
				<text class="basic_title">南宁大大地产商</text>
			</view>
			</view>
			<view class="tn_title">
				<text>检查依据</text>
			</view>
			<view class="basic_container3"></view>
			<view class="tn_title">
				<text>标准规范</text>
			</view>
			<view class="basic_container3"></view>
			<view class="tn_title">
				<text>查验声明</text>
			</view>
			<view class="basic_container3"></view>
			<button form-type="submit" type="primary">提交</button>
		</form>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad() {
			self=this;
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
				del:[],
				wh:"",
				takenotes:[1],
				note:1
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
			}
		}
	}
</script>

<style>
</style>
