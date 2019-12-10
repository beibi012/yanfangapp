<template>
	<!-- 个人查验样式p502 -->
	<view class="personal_inspection">
		<!-- 顶部导航条  css公用部分p13 p19-->
		<view class="app_top"></view>
		<view class="navtop">
			<view class="top"></view>
			<navigator class="navtop_head" url="../personal/setting">
				<image :src="portrait" mode="aspectFill"></image>
			</navigator>
			<navigator class="navtop_location" url="../location/location">
				<view class="location_textc">
					<text>{{city}}</text>
					</view>
				<image src="/static/Location@2x.png" mode="widthFix"></image>
			</navigator>
		</view>
		<!-- 内容列表 --> 
		<view>
			<navigator class="newclient" url="newly/basic_information">新增委托人</navigator>
		</view>
	
		<scroll-view scroll-y="true" class="clientlist_scroll" @touchmove.stop.prevent="moveHandle" enable-back-to-top="true" @scrolltoupper="dropDown" upper-threshold="-80" @scrolltolower="pullUp" lower-threshold="-80">
				<navigator class="clientlist" :url="'search/details?psId='+client.psId+'&psName='+client.name" v-for="client in clientlist">
					<view class="row">
						<view class="row_title1" ><view class="color" :style="client.state=='最新'?'background-color: red;':client.state=='录入'?'background-color: #f2a039;':client.state=='已完成'?'background-color: greenyellow;':client.state=='复检'?'background-color: royalblue;':'background-color: red;'"></view>{{client.name}}</view>
						<view class="row_right" style="margin-top: 5upx;" :style="client.state=='最新'?'color: red;':client.state=='录入'?'color: #f2a039;':client.state=='已完成'?'color: greenyellow;':client.state=='复检'?'color: royalblue;':'color: red;'" >最新</view>
					<!-- 	<view class="row_title" style="width: 72%;text-align: left; text-indent: 5%;"><view class="color" :style="client.state=='最新'?'background-color: red;':client.state=='录入'?'background-color: #f2a039;':client.state=='已完成'?'background-color: greenyellow;':client.state=='复检'?'background-color: royalblue;':'background-color: pink;'"></view>{{client.name}}</view>
						<view class="row_right1" style="margin-top: 5upx;" :style="client.state=='最新'?'color: red;':client.state=='录入'?'color: #f2a039;':client.state=='已完成'?'color: greenyellow;':client.state=='复检'?'color: royalblue;':'color: pink;'">{{client.state}}</view> -->
					</view>
					<view class="row">
						<view class="row_title1">{{client.name}}</view>
						<view class="row_content"></view>
					</view>
					<view class="row">
						<view class="row_title c999">电  话:</view>
						<view class="row_content c999">{{client.cellphone}}</view>
					</view>
					<view class="row  nohidden">
						<view class="row_title c999">面  积:</view>
						<view class="row_content c999">{{client.area}}</view>
						<navigator class="row_right row_de" url="remind/remind_details" @click.stop="moveHandle">详情</navigator>
					</view>
				</navigator>
				<!-- <navigator class="clientlist" url="search/details" >
					<view class="row">
						<view class="row_title1" >甲醛检测甲醛检测甲醛检测甲醛检测甲醛检测</view>
						<view class="row_right" style="margin-top: 5upx;" >最新</view>
					</view>
					<view class="row">
						<view class="row_title">王先生</view>
						<view class="row_content"></view>
					</view>
					<view class="row">
						<view class="row_title c999">电  话:</view>
						<view class="row_content c999">1231231232131231</view>
					</view>
					<view class="row  nohidden">
						<view class="row_title c999">面  积:</view>
						<view class="row_content c999">155m²</view>
						<navigator class="row_right row_de" url="remind/remind_details" @click.stop="a">详情</navigator>
					</view>
				</navigator> -->
				<view class="pull_up" >
					已加载全部
				</view>
		</scroll-view>
		<!-- 任务提醒 -->
		<view class="bg" :style="bg" @click="remindHide" @touchmove.stop.prevent="moveHandle"></view>
		<view class="remind" @click="remindShow">
			<image class="remind_icon" src="/static/notice@2x.png" mode="widthFix"></image>
			<view class="remind_text">
				<view class="textlist"><text class="textcontent">您有新任务</text><text class="time">13小时前</text></view>
				<view class="textlist"><text class="textcontent">您有新任务您有新任务您有新任务您有新任务</text><text class="time">15小时前</text></view>
			</view>
			<view class="unread_container">
				<text class="unread_text">NEW</text>
				<text class="gt">&gt</text>
			</view>
		</view>
		<scroll-view scroll-y="true" class="remind_container" :style="remind_bottom" @touchmove.stop.prevent="moveHandle">
			<navigator class="task" :url="'remind/remind_details?date='+e.date+'&number='+e.number" v-for="e in tasklist">
				<view>任务名称：{{e.number}}</view>
				<view>委托人：{{e.name}}</view>
				<view>验房时间：{{e.date}}</view>
				<view class="details">
					<text>查看详情</text> 
					<view class="gt">&gt</view>
					</view>
			</navigator>
		</scroll-view>
	</view>
</template>

<script>
	var self;
	export default {
		onLoad() {
			self=this;
			this.headportrait=getApp().globalData.navtop_headportrait;
		},
		onReady() {
			this.load=true;
		},
		onShow() {
			self=this;
			uni.getStorage({
			    key: 'portrait',
			    success: function (res) {
			       self.portrait= res.data;
			    }
			});
			uni.getStorage({
			    key: 'city',
			    success: function (res) {
			            self.city= res.data;
			        }
			});
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			self.clientlist=[]
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemlist?prClass=2',
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
				},
				success: res => {
					console.log(res)
					console.log(res.data.total)
					console.log(res.data.rows)
					console.log(res.data.rows[0])
					for(let i =0;i<res.data.total;i++){
						let obj={};
						// obj.address=res.data.rows[i].prss[0].psName;
						obj.name=res.data.rows[i].prName;
						obj.psId=res.data.rows[i].prss[0].psId
						// obj.area=res.data.rows[i].prss[0].psWithinArea;
						self.clientlist.push(obj)
						console.log(obj)
					}
					console.log(self.clientlist)
					
				},
				fail: () => {},
				complete: () => {}
			});
		},
		data(){
			return{
				load:false,
				psId:"",
				city:"",
				remind_bottom:"bottom: -100vh;transition:0.3s;",
				bg:"top: 100vh;transition:0.3s;transition:0.3s;",
				portrait:"/static/tx.png",
				// clientlist:[
				// 	{developer:"万科城",name:"王先生",address:"八号楼3单元-2-201号",cellphone:"15577130000",area:"143",state:"最新"},
				// 	{developer:"保利领秀前城",name:"张先生",address:"九号楼3单元-2-201号",cellphone:"15577130000",area:"150",state:"复检"},
				// 	{developer:"万科城",name:"王先生",address:"八号楼3单元-2-201号",cellphone:"15577130000",area:"143",state:"录入"},
				// 	{developer:"保利领秀前城",name:"张先生",address:"九号楼3单元-2-201号",cellphone:"15577130000",area:"150",state:"已完成"},
				// 	{developer:"万科城",name:"王先生",address:"八号楼3单元-2-201号",cellphone:"15577130000",area:"143",state:"已交付"},
				// 	{developer:"保利领秀前城",name:"张先生",address:"九号楼3单元-2-201号",cellphone:"15577130000",area:"150",state:"未知"},
				// 	{developer:"万科城",name:"王先生",address:"八号楼3单元-2-201号",cellphone:"15577130000",area:"143",state:"录入"},
				// 	{developer:"保利领秀前城",name:"张先生",address:"九号楼3单元-2-201号",cellphone:"15577130000",area:"150",state:"已完成"},
				// ],
				clientlist:[],
				tasklist:[
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2016-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2017-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2018-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2020-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""},
					{name:"XXX",number:"XXXXXXdsgabnghoasigasihfgoiashdgioahsdgiouahgioahio",date:"2019-06-06",data:""}
					
				]
				
			}
		},
		methods:{
			a:()=>{
				console.log("aaa")
			},
			toPersonal:()=>{
				uni.navigateTo({
				    url: '../personal/personal'
				});
			},
			toLocation:()=>{
				uni.navigateTo({
				    url: '../location/location'
				});
			},
			remindShow:()=>{
				self.remind_bottom="bottom:0upx;transition:0.5s;"
				self.bg="top:0upx;transition:0.3s;"
			},
			remindHide:()=>{
				self.remind_bottom="bottom:-100vh;transition:0.3s;"
				self.bg="top:100vh;transition:0.3s;"
			},
			moveHandle:()=>{
			},
			dropDown:()=>{
					uni.showToast({
				    title: '已是最新内容'
					});
			},
			pullUp:()=>{
					uni.showToast({
				    title: '已无更多内容'
					});
		}
	}
	}
</script>

<style>
.personal_inspection{
	width: 100%;
	height: 100vh;
	overflow: hidden;
}
.remind{
width: 100%;
height: 100upx;
border-top:  1px solid rgba(155,155,155,0.5);
border-bottom:  1px solid rgba(155,155,155,0.5);
position:  fixed;
bottom: 0; //手机上要写0
background-color: #fff;
white-space: nowrap;
overflow: hidden;
}
.remind_icon{
	display: inline-block;
	width: 80upx;
	height: 80upx;
	margin: 10upx 2% 10upx 2%;
	float: left;
}
.remind_text {
	width: 65%;
	height: 80upx;
	margin: 10upx 0;
	float: left;
	}
	.textlist{
		width: 100%;
		height: 40upx;
}
		
		.textcontent{
		display: inline-block;
		width: 70%;
		font-size: 35upx;
		vertical-align: top;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		}
	.time{
		display:  inline-block;
		width: 30%;
		font-size: 25upx;
		color: #C0C0C0;
		vertical-align: top;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
.unread_container {
	width: 19%;
	height: 80upx;
	float: left;
	margin: 10upx 0;
	}
	.unread_text{
		font-size: 25upx;
		color: red;
	}
	.gt {
		font-size: 50upx;
		color: #C0C0C0;
	}
	.newclient{
		display: inline-block;
		width: 75%;
		height: 60upx;
		line-height: 60upx;
		margin: 20upx 12.5%;
		background-color: #00B4FF;
		color: #fff;
		border-radius: 50upx;
		text-align: center;
	}
	.clientlist_scroll{
		width: 100%;
		height: 75vh;
	}
	.clientlist:first-child{
		border-top: 1px solid #ddd;
	}
	.clientlist{
		border-bottom: 1px solid #ddd;
		height: 200upx;
		font-size: 30upx;
		color: #333;
		line-height: 50upx;
	}
	.pull_up{
		height: 200upx;
		width: 100%;
		color: #999;
		text-align: center;
	}
	
	
	
	.row{
		width: 750upx;
		height: 50upx;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
	}
	.row_title{
		display: inline-block;
		width: 18%;
		float: left;
		white-space: pre-wrap;
		vertical-align: top;
		text-indent: 20upx;
	}
	.row_title1{
		display: inline-block;
		width: 75%;
		float: left;
		white-space: pre-wrap;
		vertical-align: top;
		text-indent: 20upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.row_title1 .color{
		display: inline-block;
		width: 10upx;
		height: 30upx;
		background-color: red;
		margin: 10upx 10upx 10upx 0;
		vertical-align: top;
		border-radius: 10upx;
	}
	.row_content{
		display: inline-block;
		width: 53%;
		height: 50upx;
		float: left;
	}
	.row_right{
		display: inline-block;
		width: 100upx;
		height: 40upx;
		line-height: 40upx;
		margin: 5upx 30upx;
		float: right;
		text-align: center;
	}
	.row_right1{
		display: inline-block;
		width: 80upx;
		height: 40upx;
		line-height: 40upx;
		margin: 0 30upx;
		float: right;
		text-align: center;
	}
	.row_de{
		border-radius: 10upx;
		background-color: #00B4FF;
		color: #fff;
		vertical-align: top;
		width: 120upx!important;
		height: 60upx!important;
		line-height: 60upx!important;
		right: 5upx;
		bottom: 5upx;
		position: absolute;
		z-index: 100!important;
	}
	.nohidden{
		overflow: inherit!important;
	}
	.row_de text{
		line-height: 50upx;
	}
	.c999{
		color: #999;
	}
	
	.bg{
		position: fixed;
		width: 100%;
		height: 1500upx;
		z-index: 0;
		background-color: rgba(0,0,0,0.3);
	}
	
	
	
	.remind_container{
		position: fixed;
		width: 100%;
		height: 70vh;
		border-radius: 20upx;
		color: #333;
		background-color: #FFFFFF;
		overflow: hidden;
		border: 1px solid #ddd;
		z-index: 100;
		}
		.task{
			width: 96%;
			height: 180upx;
			margin: 2% 2% 0 2%;
			border: 1px solid #ddd;
			border-radius: 10upx;
			}
			 .task view{
				height: 25%;
				font-size: 35upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				vertical-align: top;
			}
			.details{
				border-top: 1px solid #ddd;
				font-size: 30upx;
				position: relative;
				}
				.gt{
					position: absolute;
					right: 0;
					top: -12upx;
					display: inline-block;
					width: 40upx;
					height: 100%;
					font-size: 40upx;
					color: #666;
					float: right;
					float: top;
					margin-right: 2%;
					vertical-align: top;
				}
/* .login_containor{
	width: 100%;
	height: 100%;
}
.login_icon{
	width: 30%;
	margin: 15% 35% 5% 35%;
} */
</style>