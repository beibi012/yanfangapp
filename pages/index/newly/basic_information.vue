<template>
	<view class="bi_container">
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="submitInfo">
					<!-- form表单基础样式输入框、下拉框、显示内容、单选p116 -->
					<!-- <view class="basic_container">
						<text class="basic_title">委托人:</text>
						<picker name='prUserName' :range="array_user" :value="index_user" @change="changeUser" >
							<view class="basic_picker">{{array_user[index_user]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
							</view>
						</picker>
					</view> -->
					<view class="basic_container">
						<text class="basic_title">委托人:</text>
						<input class="basic_input" name="prUserName" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">联系方式:</text>
						<input class="basic_input" name="psPhone" type="number" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">检查项目名称:</text>
						<input class="basic_input" name="psCheckTheItem" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">单元房号:</text>
						<input class="basic_input" name="psName" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">套内建筑面积:</text>
						<input class="basic_input" name="psWithinArea" type="text" value="" >
					</view>
					<view class="basic_container">
						<text class="basic_title">装修程度:</text>
						<picker name='psDecorateDegree' :range="array" :value="index" @change="changeProprtytype" >
							<view class="basic_picker">{{array[index]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
							</view>
						</picker>
					</view>
					<view class="basic_container">
						<text class="basic_title">房屋类型:</text>
						<picker name='psHousingTypes' :range="array_houseType" :value="index_houseType" @change="changeHousetype" >
							<view class="basic_picker">{{array_houseType[index_houseType]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
							</view>
						</picker>
					</view>
					<!-- <view class="basic_container">
						<text class="basic_title">房屋类型:</text>
						<input class="basic_input" name="psHousingTypes" type="text" value="" >
					</view> -->
					<view class="basic_container">
						<text class="basic_title">检查期是否通电:</text>
						<radio-group class="basic_radio" name="psElectricityFlag">
								<view class="radio_option"><radio value="1" /><text>是</text></view>
								<view class="radio_option"><radio value="2" /><text>否</text></view>
						</radio-group>
					</view>
					<view class="basic_container">
						<text class="basic_title">检查期是否通水:</text>
						<radio-group class="basic_radio" name="psWaterFlag">
								<view class="radio_option"><radio value="1" /><text>是</text></view>
								<view class="radio_option"><radio value="2" /><text>否</text></view>
						</radio-group>
					</view>
					<!-- <view class="basic_container">
						<text class="basic_title">现场检查人员:</text>
						<input class="basic_input" name="psOperationUser" type="text" value="" >
					</view> -->
					<!-- <view class="basic_container">
						<text class="basic_title">报告编制人:</text>
						<input class="basic_input" name="psReportWriting" type="text" value="" >
					</view> -->
					<!-- <view class="date_container" style="margin-left: 2%;">
						<view style="font-size: 30upx;color: #333;">实地验房时间:</view>
						<picker name="psCheckTime" mode="date" :value="date" @change="pickDate">
							<view class="date" style="margin-left: 10%;">{{date}}</view>
						</picker>
						<picker name="psCheckTime_ud" :value="upordown_Aindex" :range="upordown_A" @change="pickTimeA">
							<view class="time">{{upordown_A[upordown_Aindex]}}</view>
						</picker>
					</view> -->
					
					<button class="submit" form-type="submit" type="primary" @click="back">提交</button>
				</form>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	var self; 
	export default{
		data(){
			return{
				getData:[],
				array:['请选择','毛坯房','精装房'],
				index:0,
				array_houseType:['请选择','平层','商铺','住宅','别墅'],
				index_houseType:0,
				array_user:['请选择'],
				index_user:0,
				date:"",
				upordown_A:["上午","下午"],
				upordown_Aindex:0,
			}
		},
		onLoad(){
			self=this;
			self.time=new Date();
			self.year=self.time.getFullYear();
			self.month=self.time.getMonth()+1;
			self.day=self.time.getDate();
			self.date=self.year+"-"+self.month+"-"+self.day; 
			self.samplingdate=self.year+"-"+self.month+"-"+self.day; 
			console.log(self.date)
			
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			// uni.request({
			// 	url: app.globalData.ctx+'/system/user/list',
			// 	method: 'POST',
			// 	header:{
			// 		'Content-type':'application/json',
			// 		'Cookie':self.cookies
			// 	},
			// 	data: {
					
			// 	},
			// 	success: res => {
			// 		console.log(res)
			// 		self.getData=res.data.rows
			// 		console.log(self.getData)
			// 		for (var i = 0; i < self.getData.length; i++) {
			// 			self.array_user.push(self.getData[i].userName)
						
			// 		}
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		methods:{
			changeProprtytype:(e)=>{
				self.index=e.detail.value;
			},
			changeHousetype:(e)=>{
				self.index_houseType=e.detail.value;
			},
			changeUser:(e)=>{
				self.index_user=e.detail.value;
			},
			pickDate:(e)=>{
				self.date=e.detail.value;
			},
			pickTimeA:(e)=>{
				self.upordown_Aindex=e.detail.value;
			},
			submitInfo:(e)=>{
				//数据的index转成字符串
				// e.detail.value.psDecorateDegree=self.array[self.index]
				console.log(e)
				// let CheckTime=e.detail.value.psCheckTime+","+self.upordown_A[e.detail.value.psCheckTime_ud]
				// console.log(CheckTime)
				// console.log(self.getData[e.detail.value.prUserName-1].userName)
				// console.log(self.getData[e.detail.value.prUserName-1].userId)
				let judge=e.detail.value
				for (let key in judge) {
					if(judge[key]==0||judge[key]==""){
						console.log("111")
						return
					}
				}
				
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
					url: app.globalData.ctx+'/home/problem/rs/addProblemsonSave2',
					method: 'POST',
					header:{
						'Content-type':'application/json',
						'Cookie':self.cookies
					},
					data: {
						"prUserName": e.detail.value.userName,
						"psAdded": e.detail.value.psPhone,
						"psCheckTheItem": e.detail.value.psCheckTheItem,
						"psName": e.detail.value.psName,
						"psWithinArea": e.detail.value.psWithinArea,
						"psDecorateDegree": e.detail.value.psDecorateDegree,
						"psHousingTypes": e.detail.value.psHousingTypes,
						"psElectricityFlag": e.detail.value.psElectricityFlag,
						"psWaterFlag": e.detail.value.psWaterFlag
					},
					success: res => {
						console.log(res)
						uni.showToast({
						    title: '提交成功',
							icon:'none'
						});
						setTimeout(function(){
							uni.hideToast();
						},1000)
						// uni.navigateBack({
						// 	delta: 1
						// });
					},
					fail: () => {},
					complete: () => {}
				});
			},
			back:()=>{
				// uni.navigateBack({
				// 	delta: 1
				// });
			}
		}
	}
</script>

<style>
</style>
