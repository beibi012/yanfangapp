 <template>
	<view>
		<view class="app_top"></view>
		<!-- 顶部导航条 -->
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
		
		<view class="web_title" @touchmove.stop.prevent="moveHandle">
			<view class="nav" :class="ac==true?'active':''" @click="toGovern">检测</view>
			<view class="nav" :class="ac==true?'':'active'" @click="toResurvey">治理</view>
		</view>
		<view class="display" style="border-bottom: 1px #ddd solid;">
			<navigator class="newsurvey" url="survey">新增检测</navigator>
			<view class="doublewidth"  :style="tab">
				
				<scroll-view scroll-y="true" class="clientlist_scroll" @touchmove.stop.prevent="moveHandle" enable-back-to-top="true" @scrolltoupper="dropDown" upper-threshold="-80" @scrolltolower="pullUp" lower-threshold="-80">
					
						<navigator class="clientlist" v-for="client in surveylist" :url="'surveydetail?data='+JSON.stringify(client)">
							<view class="row">
								<view class="row_title1">{{client.projectName}}</view>
								
								<view class="row_right" style="margin-top: 5upx; color: #f00;">已检测</view>
							</view>
							<view class="row">
								<view class="row_title1">{{client.homeCustomers[0].name}}</view>
								
							</view>
							<view class="row">
								<view class="row_title c999">电  话:</view>
								<view class="row_content c999">{{client.homeCustomers[0].phone}}</view>
							</view>
							<view class="row  nohidden">
								<view class="row_title c999">地  址:</view>
								<view class="row_content c999">{{client.homeCustomers[0].address}}</view>
								<navigator class="row_right row_de" :url="'govern?data='+JSON.stringify(client)" @click.stop="moveHandle">治理</navigator>
							</view>
						</navigator>
						<navigator class="clientlist" url="surveydetail" >
							<view class="row">
								<view class="row_title1" >甲醛检测甲醛检测甲醛检测甲醛检测甲醛检测</view>
								<view class="row_right" style="margin-top: 5upx;" >已检测</view>
							</view>
							<view class="row">
								<view class="row_title">李先生</view>
								<view class="row_content"></view>
							</view>
							<view class="row">
								<view class="row_title">电  话:</view>
								<view class="row_content">1231231232131231</view>
							</view>
							<view class="row nohidden">
								<view class="row_title">地  址:</view>
								<view class="row_content">155</view>
								<navigator class="row_right row_de" url="govern" @click.stop="moveHandle">治理</navigator>
							</view>
						</navigator>
						
						
						
						<view class="pull_up" >
							已加载全部
						</view>
				</scroll-view>
				
				
				<scroll-view scroll-y="true" class="clientlist_scroll1" style="top: 0; left: 0;border: #fff 1px solid;" @touchmove.stop.prevent="moveHandle" enable-back-to-top="true" @scrolltoupper="dropDown" upper-threshold="-80" @scrolltolower="pullUp" lower-threshold="-80">
						<navigator class="clientlist" :url="'search/details?psId='+client.psId+'&psName='+client.name" v-for="govern in governlist">
							<view class="row">
								<view class="row_title1">{{govern.projectName}}</view>
								
								<view class="row_right" style="margin-top: 5upx; color: #f00;">已检测</view>
							</view>
							<view class="row">
								<view class="row_title">{{client.name}}</view>
								<view class="row_content"></view>
							</view>
							<view class="row">
								<view class="row_title c999">电  话:</view>
								<view class="row_content c999">{{client.cellphone}}</view>
							</view>
							<view class="row nohidden">
								<view class="row_title c999">地  址:</view>
								<view class="row_content c999">{{client.area}}</view>
								<navigator class="row_right row_de" url="resurvey" @click.stop="moveHandle">复检</navigator>
							</view>
						</navigator>
						<navigator class="clientlist" url="governdetail" >
							<view class="row">
								<view class="row_title1" >甲醛检测甲醛检测甲醛检测甲醛检测甲醛检测</view>
								<view class="row_right" style="margin-top: 5upx;" >已治理</view>
							</view>
							<view class="row">
								<view class="row_title">李先生</view>
								<view class="row_content"></view>
							</view>
							<view class="row">
								<view class="row_title">电  话:</view>
								<view class="row_content">1231231232131231</view>
							</view>
							<view class="row nohidden">
								<view class="row_title">地  址:</view>
								<view class="row_content">155</view>
								<navigator class="row_right row_de" url="resurvey" @click.stop="moveHandle">复检</navigator>
							</view>
						</navigator>
						<view class="pull_up" >
							已加载全部
						</view>
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	var self;
	export default {
		onLoad() {
			self=this;
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("治理获取到cookies值为:"+self.cookies);
			    }
			});
		},
		onReady() {
			this.load=true;
		},
		onShow() {
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
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
			
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
			    url:app.globalData.ctx+ '/home/homeAirMonitoring/list', 
			    header: {
						'Content-type':'application/x-www-form-urlencoded',
						'Cookie':self.cookies
			    },
				method: 'post',
			    success: (res) => {
					console.log(res)
					self.surveylist=res.data.rows
					for (let i = 0; i < self.surveylist.length; i++) {
						self.surveylist[i].homeCustomers.sort((a,b)=>{
							return a.customerType - b.customerType
						})
						self.surveylist[i].homeMonitoringItems.sort((a,b)=>{
							return a.itemSerialNumber - b.itemSerialNumber
						})
						self.surveylist[i].homeEquipments.sort((a,b)=>{
							return a.equSerialNumber - b.equSerialNumber
						})
						self.surveylist[i].homeMonitoringContents.sort((a,b)=>{
							return a.contentSerialNumber - b.contentSerialNumber
						})
					}
					
			uni.request({
				url:app.globalData.ctx+ '/home/homeGovernMessage/list', 
				header: {
						'Content-type':'application/x-www-form-urlencoded',
						'Cookie':self.cookies
				},
				method: 'post',
				data: {},
				success: res => {
					self.governlist=res.data.rows
					for (let i = 0; i < self.governlist.length; i++) {
						self.governlist[i].homeAirMonitoring.homeCustomers.sort((a,b)=>{
							return a.customerType - b.customerType
						})
					}
					
					console.log(JSON.stringify(self.governlist))
				},
				fail: () => {}, 
				complete: () => {
					setTimeout(function () {
					    uni.hideLoading();
					}, 1000);
				}
			});
					// self.itemname=["请选择"]
					// for(let i=0; i<self.getData.total;i++){
					// 	if(self.getData.rows[i].projectName)
					// 	self.itemname.push(self.getData.rows[i].projectName)
					// }
					// console.log("===============")
					// console.log(self.itemname)
					
			    }
			});
		},
		data() {
			return {
				load:false,
				cookies:"",
				city:"",
				portrait:"/static/tx.png",
				surveylist:[],
				clientlist:[],
				governlist:[],
				ac:true,
				tab:"left:0upx;transition:0.3s;",
				sub:"left:750upx;transition:0.3s;",
			}
		},
		methods: {
			moveHandle:()=>{
				
			},
			toGovern:()=>{
				self.ac=true;
				self.tab="left:0upx;transition:.3s;";
				self.sub="left:750upx;transition:.3s;";
			},
			toResurvey:()=>{
				self.ac=false;
				self.tab="left:-750upx;transition:.3s;";
				self.sub="left:0upx;transition:.3s;";
			},
		}
	}
</script>

<style>
.newsurvey{
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
.web_title{
		height: 6vh;
		width: 750upx;
		margin-bottom: 2%;
		white-space: nowrap;
	}
	.nav{
		display: inline-block;
		width: 373upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		color: #999;
		border: 1px solid #ddd;
	}
	.active{
		color: #333;
		border-bottom: #00B4FF solid 5upx;
	}
.display{
	width: 100%;
	overflow: hidden;
}
.doublewidth{
	width: 1550upx;
	white-space: nowrap;
	position: absolute;
}
.clientlist_scroll{
	position: relative;
	width: 750upx;
	height: 75vh;
	top: 0;
	display: inline-block;
	overflow: hidden;
	}
	.clientlist_scroll1{
		position: relative;
		width: 750upx;
		height: 75vh;
		top: 0;
		left: 750upx;
		display: inline-block;
		overflow: hidden;
		}
	.goverup{
		position: relative;
		top: -100upx;
	}
	.clientlist{
		
		border-bottom: 1px solid #ddd;
		border-top: 1px solid #ddd;
		width: 750upx;
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
	.row_title .color{
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
</style>

<!-- <view class="pi_container">
	<navigator v-for="e in list" class="icon_container" :url="e.url">
		<image :style="load?'':'display: none;'" :src="e.src" mode="widthFix"></image>
		<text>{{e.name}}</text>
	</navigator>


</view> -->