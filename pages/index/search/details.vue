<template>
	<!-- 每套房子问题筛选页面815 -->
	<view class="details_content">
<!-- 顶部导航条 -->
		<view class="app_top"></view>
		<view class="normal_nav">
			<view class="top"></view>
			<navigator class="left" open-type="navigateBack">
				<image style="width: 25upx;height: 25upx;" src="/static/back.png" mode="widthFix"></image>
			</navigator>
			<view class="title">{{psName}}</view>
			<view class="right"></view>
		</view>
		<view class="web_title"  @touchmove.stop.prevent="moveHandle">
			<view class="nav" :class="ac==true?'active':''" @click="problemList">问题列表</view>
			<view class="nav" :class="ac==true?'':'active'" @click="clickMeasure">实测实量</view>
		</view>
		<view class="show_container">
			<view class="details_container" :style="tab">
					<!-- 问题列表 -->
			<view  class="half" >
						<view class="picker_container">
							<!-- <picker :range="person" @change="changePerson">
								<view class="picker">{{person[index1]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker> -->
							<picker :range="main" @change="changeMain">
								<view class="picker">{{main[index2]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
							<picker :range="item" @change="changeItem">
								<view class="picker">{{item[index3]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
						</view>
						<!-- <view class="picker_container">
							<picker :range="person" @change="changePerson">
								<view class="picker">{{person[index1]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image></view>
							</picker>
						</view> -->
								<!-- 新增问题 -->
						<view class="newly_problem">
							<navigator class="newly_botton" url="../newly/take_notes">新增问题</navigator>
							</view>
							<!-- <view class="img_container">
								<image class="img" src="/static/hxt.png" mode="scaleToFill"></image>
							</view> -->
				<!-- 问题列表 -->
							<scroll-view class="problemlist" scroll-y="true" >
								<navigator class="problem" :url="e.url+'?changed='+e.changed" v-for="(e,index) in problemlist" @click="getIndex(index)">
									<view class="top"> 
										<view class="color color_red"></view>
									<view class="main_item">{{e.main}}-{{e.checkitem}}</view>
									</view>
									
									<view class="problem_content"><text class="text">{{e.problem_content}}</text></view>
									<view class="date">{{e.date}}-{{e.time}}</view>
									<view class="sate">
										<view class="dot color_red"></view>
										<text>{{e.statetext}}</text>
									</view>
								</navigator>
								<navigator class="problem" url="problem_details" @click="getIndex(index)">
									<view class="top"> 
										<view class="color color_green"></view>
									<view class="main_item">房间-墙面-空鼓</view>
									</view>
									
									<view class="problem_content"><text class="text">深圳xxxx有限公司</text></view>
									<view class="date">2019-11</view>
									<view class="sate">
										<view class="dot color_green"></view>
										<text>已整改</text>
									</view>
								</navigator>
								<view class="load_bottom">
									加载更多
								</view>
							</scroll-view>
						<!-- <view class="progress_container" :style="tab">
							<view class="progress">
							<view class="text">
								整改进度
							</view>
							 <progress percent="80" show-info="true" />
						</view>
						</view> -->
					</view>
					
					
					
					
					
					<!-- 实测实量 -->
						<scroll-view class="half" scroll-y="true" v-if="show">
							<!-- <checkbox-group @change="choiceItem">
								<label>
									<checkbox value="m1" /><text>净高</text>
								</label>
								<label>
									<checkbox value="m2" /><text>标高</text>
								</label>
								<label>
									<checkbox value="m3" /><text>垂直度</text>
								</label>
								<label>
									<checkbox value="m4" /><text>平整度</text>
								</label>
								<label>
									<checkbox value="m5" /><text>阴阳角</text>
								</label>
								<label>
									<checkbox value="m6" /><text>开间</text>
								</label>
								<label>
									<checkbox value="m7" /><text>湿度</text>
								</label>
							</checkbox-group> -->
								<form @submit="submitMeasure">
									<!-- 净高数据输入 -->
									<view style="border-bottom: 1px solid #ddd;"> 
										<view class="basic_headline">
											<text>净高</text>
										</view>
										<view class="data_container">
											<view class="content" v-for="(t,jgsindex) in roomtype">
												<view>
													<text class="roomtype">{{t.type}}</text>
													<!-- <text class="standard">标准值</text> -->
												</view>
												<view class="data_content">
													
													<view class="inputcontent" v-for="(d,jgindex) in direction">
													<view class="inputtitle"><text>{{d.direction}}</text></view>
													<input class="inputvalue" :id="'jg'+jgindex+jgsindex" :style="d.warm" :value="JGDobj[jgsindex][jgindex]"  :name="'JG'+t.name+d.name" type="number" adjust-position="false" @input="judgeJG" :disabled="t.disabled" @click="enterJGStandard"><!-- @blur="judgeValue" -->
											</view>
												</view>
												<view class="standard_container">
													<view class="right_title">标准值</view>
													<input class="inputstandard" :id="'JGsid'+jgsindex" :name="'JG'+t.name+'standard'" type="number" adjust-position="false" @input="enterJG"><!-- @blur="judgeStandard" -->
													<view class="right_title">极  差</view>
													<view class="inputstandard" :style="JGDvalue[jgsindex]>JGstandard[jgsindex]?'color:red;':''">{{JGDvalue[jgsindex]}}</view>
												</view>
											</view>
										</view>
									</view>
									
									
									<!-- 标高数据输入 -->
									<view style="border-bottom: 1px solid #ddd;">
										<view class="basic_headline">
										<text>标高</text>
									</view>
									<view class="data_container">
										<view class="content" v-for="(t,bgsindex) in roomtype">
											<view>
												<text class="roomtype">{{t.type}}</text>
												<!-- <text class="standard">标准值</text> -->
											</view>
											<view class="data_content">
												
												<view class="inputcontent" v-for="(d,bgindex) in direction">
												<view class="inputtitle"><text>{{d.direction}}</text></view>
												<input class="inputvalue" :id="'bg'+bgindex+bgsindex" :style="d.warm" :value="BGDobj[bgsindex][bgindex]" :name="'BG'+t.name+d.name" type="number" adjust-position="false" @input="judgeBG" :disabled="t.disabled2" @click="enterBGStandard"><!-- @blur="judgeValue" -->
										</view>
											</view>
											<view class="standard_container">
												<view class="right_title">标准值</view>
												<input class="inputstandard" :id="'BGsid'+bgsindex" :name="'BG'+t.name+'standard'" type="number" adjust-position="false" @input="enterBG"><!-- @blur="judgeStandard" -->
												<view class="right_title">极  差</view>
												<view class="inputstandard" :style="BGDvalue[bgsindex]>BGstandard[bgsindex]?'color:red;':''">{{BGDvalue[bgsindex]}}</view>
											</view>
										</view>
									</view>
									</view>
					<!-- 1////////////////////////////////////////////////////// -->
									<view class="data_container2" style="border-bottom: 1px solid #ddd;margin-top: 2%;">
										<view class="content">
											<view>
												<text class="roomtype">开间</text>
												<!-- <text class="standard">标准值</text> -->
											</view>
											<view>
												<text class="right1">极差</text>
												<text class="right2">极差</text>
											</view>
											<view class="data_content">
												<view class="wrap">
													<input :id="'bay'+num" class="manyinput" type="number" v-for="(num,index) in number" :name="'bay'+num+'value'" :disabled="bayStandard==''?true:num%3==0?true:false"  adjust-position="false" @input="enterBayValue" :value="bayValue[num]" @click="judgeBay" :style="num%3==0?(bayValue[num]>bayStandard?'color:red;':''):''"/>
												</view>
												
											</view>
											<view class="standard_container2" style="margin-left: 0;margin-top: 80upx;">
												<view class="right_title">标准值</view>
												<input class="inputstandard" type="number" adjust-position="false" @input="enterBayStandard">
											</view>
										</view>
									</view>
									<!-- 垂直度、平整度、阴阳角、开间、湿度 -->
									<view class="data_container2">
										<view class="content" v-for="(t,typeindex) in baytype"  style="border-bottom: 1px solid #ddd;margin-top: 2%;">
											<view>
												<text class="roomtype">{{t.type}}</text>
												<!-- <text class="standard">标准值</text> -->
											</view>
											<!-- <view>
												<text class="right1">高级</text>
												<text class="right2">普通</text>
											</view> -->
											<view class="data_content">
												<view class="wrap">
													<input :id="'all'+typeindex+num" class="manyinput" :style="t.valueArr[num]>t.standard?'color:red;':''" type="number" v-for="num in number" :name="t.name+num+'value'" :value="t.valueArr[num]" adjust-position="false" :disabled="t.disabled" @input="enterAllTypeValue" @click="showAllTip"/>
												</view>
												
											</view>
											<view class="standard_container2" style="margin-left: 0;margin-top: 80upx;">
												<view class="right_title">标准值</view>
												<input :id="typeindex" class="inputstandard" type="number" adjust-position="false" @input="enterAllStandard" >
											</view>
										</view>
									</view>
									<view style="width: 100%;height: 100upx;">
										
									</view>
									<view class="submit_container" :style="sub" @touchmove.stop.prevent="moveHandle">
										<button class="submit" form-type="submit" type="primary" @click.stop.prevent="moveHandle">提交</button>
									</view>
									
								</form>
						</scroll-view>
				</view>
		</view>
		
				
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(e) {
			self=this;
			console.log(e)
			self.psId=e.psId
			self.psName=e.psName
			self.JGDvalue[0]=""
			self.JGDvalue[1]=""
			self.JGDvalue[2]=""
			self.JGDvalue[3]=""
			self.BGDvalue[0]=""
			self.BGDvalue[1]=""
			self.BGDvalue[2]=""
			self.BGDvalue[3]=""
			for (var i = 1; i < 31; i++) {
				self.number.push(i)
				self.bayValue[i]=""
				self.verticalityValue[i]=""
				self.planenessValue[i]=""
				self.yyjValue[i]=""
				self.humidityValue[i]=""
				self.baytype[0].valueArr[i]=""
				self.baytype[1].valueArr[i]=""
				self.baytype[2].valueArr[i]=""
				self.baytype[3].valueArr[i]=""
			}
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?psId=98027aa660a243f980c1764a55f58139',
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
					
				},
				success: res => {
					console.log(res)
				},
				fail: () => {},
				complete: () => {}
			});
			// uni.$on('state',(data)=>{
			// 	self.problemlist[self.problemindex].changed=data.changed;
			// 	if(self.problemlist[self.problemindex].changed==1){
			// 		self.problemlist[self.problemindex].statetext="已整改";
			// 		self.problemlist[self.problemindex].statedot="blackdot";
			// 	}
				
			// })
			
		},
		onShow() {
			setTimeout(()=>{
				self.show=true;
			},300)
		},
		data(){
			return{
				psId:"",
				psName:"",
				jgArr:[],
				bgArr:[],
				veArr:[],
				show:false,
				ac:true,
				tab:"left:0upx;transition:0.3s;",
				sub:"left:750upx;transition:0.3s;",
				title:"8-2-201",
				person:["请选择","徐xx","赵xx"],
				index1:0,
				main:["请选择","客厅","厨房","主卧","次卧"],
				index2:0,
				item:["请选择","插座","天花板","墙壁","门框","窗口"],
				index3:0,
				allArray:[
					["请选择","徐xx","赵xx"],
					["请选择","客厅","厨房","主卧","次卧"],
					["请选择","插座","天花板","墙壁","门框","窗口"]
					],
				index4:0,
				problemindex:-1,
				problemlist:[],
				jgshow:false,
				bgshow:false,
				czdshow:false,
				pzdshow:false,
				yyjshow:false,
				kjshow:false,
				sdshow:false,
				baytrue:true,
				bayfalse:false,
				roomtype:[
					{type:"客厅",name:"1",disabled:"true",disabled2:"true"},
					{type:"主卧",name:"2",disabled:"true",disabled2:"true"},
					{type:"次卧",name:"3",disabled:"true",disabled2:"true"},
					{type:"书房",name:"4",disabled:"true",disabled2:"true"}
				],
				direction:[
					{direction:"左上:",name:"lt",warm:"color:#000"},
					{direction:"右上:",name:"rt",warm:"color:#000"},
					{direction:"右下:",name:"rb",warm:"color:#000"},
					{direction:"左下:",name:"lb",warm:"color:#000"},
					{direction:"中间:",name:"middle",warm:"color:#000"}
					],
				measure:[],
				jgstandard:"",
				jginput:true,
				standard:[], 
				JGDvalue:[],
				JGDobj:[
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					],
				JGstandard:["","","","",""],
				bgstandard:"",
				bginput:true,
				BGDvalue:[],
				BGDobj:[
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
					{0:"",1:"",2:"",3:"",4:""},
				],
				BGstandard:["","","","",""],
				bayValue:[],
				bayStandard:"",
				red:false,
				baytype:[
					{type:"垂直度",name:"verticality",valueArr:[],disabled:true,sandard:""},
					{type:"平整度",name:"planeness",valueArr:[],disabled:true,sandard:""},
					{type:"阴阳角",name:"yyj",valueArr:[],disabled:true,sandard:""},//{type:"开间",name:"bay"},
					{type:"湿度",name:"humidity",valueArr:[],disabled:true,sandard:""}
					],
					verticalityStandard:"",
					planenessStandard:"",
					yyjStandard:"",
					humidityStandard:"",
					verticalityValue:[],
					planenessValue:[],
					yyjValue:[],
					humidityValue:[],
				number:[],
				number2:[1,2,3,4,5]
				
			}
		},
			methods:{
				problemList:()=>{
					self.ac=true;
					self.tab="left:0upx;transition:.3s;";
					self.sub="left:750upx;transition:.3s;";
				},
				clickMeasure:()=>{
					self.ac=false;
					self.tab="left:-750upx;transition:.3s;";
					self.sub="left:0upx;transition:.3s;";
				},
				changePerson:(e)=>{
					self.index1=e.detail.value;
				},
				changeMain:(e)=>{
					self.index2=e.detail.value;
				},
				changeItem:(e)=>{
					self.index3=e.detail.value;
				},
				getIndex:(index)=>{
					self.problemindex=index;
					console.log(self.problemindex)
				},
				submitMeasure:(e)=>{
					console.log(e)
					const jgArray=new Array
					const bgArray=new Array
					const veArray=new Array
					const plArray=new Array
					const yyjArray=new Array
					const bayArray=new Array
					const huArray=new Array
					const Obj=e.detail.value;
					console.log(Obj)
					let jg1=new Object
					let bg1=new Object
					let k=0;
					
					let v1="1",n1="1",s1="1",i1=1;
					let v2="1",n2="1",s2="1";
					let v3="1",n3="1",s3="1";
					let v4="1",n4="1",s4="1";
					let v5="1",n5="1",s5="1";
						for (let key in Obj) {
							if (key.search("JG1")!==-1){
									if (key.search("lt")!==-1){jg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){jg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){jg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){jg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){jg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){jg1.standardValues=Obj[key];k++}
									if(k==6){
										jg1.homeLocationFlag="1"
										jgArray.push(jg1)
										jg1={}
										k=0
									}
								}
							}
							for (let key in Obj) {
								if (key.search("JG2")!==-1){
									if (key.search("lt")!==-1){jg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){jg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){jg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){jg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){jg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){jg1.standardValues=Obj[key];k++}
									if(k==6){
										jg1.homeLocationFlag="2"
										jgArray.push(jg1)
										jg1={}
										k=0
									}
								
								}
							}
							for (let key in Obj) {
								if (key.search("JG3")!==-1){
									if (key.search("lt")!==-1){jg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){jg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){jg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){jg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){jg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){jg1.standardValues=Obj[key];k++}
									if(k==6){
										jg1.homeLocationFlag="3"
										jgArray.push(jg1)
										jg1={}
										k=0
									}
								}
							}
							for (let key in Obj) {
								if (key.search("JG4")!==-1){
									if (key.search("lt")!==-1){jg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){jg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){jg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){jg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){jg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){jg1.standardValues=Obj[key];k++}
									if(k==6){
										jg1.homeLocationFlag="4"
										jgArray.push(jg1)
										jg1={}
										k=0
									}
								}
							}
							for (let key in Obj) {
								if (key.search("BG1")!==-1){
									if (key.search("lt")!==-1){bg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){bg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){bg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){bg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){bg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){bg1.standardValues=Obj[key];k++}
									if(k==6){
										bg1.homeLocationFlag="1"
										bgArray.push(bg1)
										bg1={}
										k=0
									}
								}
							}
							for (let key in Obj) {
								if (key.search("BG2")!==-1){
									if (key.search("lt")!==-1){bg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){bg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){bg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){bg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){bg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){bg1.standardValues=Obj[key];k++}
									if(k==6){
										bg1.homeLocationFlag="2"
										bgArray.push(bg1)
										bg1={}
										k=0
									}
								}
							}
							for (let key in Obj) {
								if (key.search("BG3")!==-1){
									if (key.search("lt")!==-1){bg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){bg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){bg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){bg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){bg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){bg1.standardValues=Obj[key];k++}
									if(k==6){
										bg1.homeLocationFlag="3"
										bgArray.push(bg1)
										bg1={}
										k=0
									}
								}
							}
							for (let key in Obj) {
								if (key.search("BG4")!==-1){
									if (key.search("lt")!==-1){bg1.upperLeft=Obj[key];k++}
									if (key.search("lb")!==-1){bg1.lowerLeft=Obj[key];k++}
									if (key.search("rt")!==-1){bg1.upperRight=Obj[key];k++}
									if (key.search("rb")!==-1){bg1.lowerRight=Obj[key];k++}
									if (key.search("middle")!==-1){bg1.centre=Obj[key];k++}
									if (key.search("standard")!==-1){bg1.standardValues=Obj[key];k++}
									if(k==6){
										bg1.homeLocationFlag="4"
										bgArray.push(bg1)
										bg1={}
										k=0
									}
								}
							}
							
							for (let key in Obj) {
								if (key.search("verticality")!==-1){
									//angle
									if(key.search("y1value")!==-1){bg1.angle1=Obj[key];v1++}
									if(key.search("y2value")!==-1){bg1.angle2=Obj[key];v1++}
									if(key.search("y3value")!==-1){bg1.angle3=Obj[key];v1++}
									if(key.search("y4value")!==-1){bg1.angle4=Obj[key];v1++}
									if(key.search("y5value")!==-1){bg1.angle5=Obj[key];v1++}
									if(key.search("y6value")!==-1){bg1.angle6=Obj[key];v1++}
									if(key.search("y7value")!==-1){bg1.angle7=Obj[key];v1++}
									if(key.search("y8value")!==-1){bg1.angle8=Obj[key];v1++}
									if(key.search("y9value")!==-1){bg1.angle9=Obj[key];v1++}
									if(key.search("y10value")!==-1){bg1.angle10=Obj[key];v1++}
									if(key.search("y11value")!==-1){bg1.angle11=Obj[key];v1++}
									if(key.search("y12value")!==-1){bg1.angle12=Obj[key];v1++}
									if(key.search("y13value")!==-1){bg1.angle13=Obj[key];v1++}
									if(key.search("y14value")!==-1){bg1.angle14=Obj[key];v1++}
									if(key.search("y15value")!==-1){bg1.angle15=Obj[key];v1++}
									if(key.search("y16value")!==-1){bg1.angle16=Obj[key];v1++}
									if(key.search("y17value")!==-1){bg1.angle17=Obj[key];v1++}
									if(key.search("y18value")!==-1){bg1.angle18=Obj[key];v1++}
									if(key.search("y19value")!==-1){bg1.angle19=Obj[key];v1++}
									if(key.search("y20value")!==-1){bg1.angle20=Obj[key];v1++}
									if(key.search("y21value")!==-1){bg1.angle21=Obj[key];v1++}
									if(key.search("y22value")!==-1){bg1.angle22=Obj[key];v1++}
									if(key.search("y23value")!==-1){bg1.angle23=Obj[key];v1++}
									if(key.search("y24value")!==-1){bg1.angle24=Obj[key];v1++}
									if(key.search("y25value")!==-1){bg1.angle25=Obj[key];v1++}
									if(key.search("y26value")!==-1){bg1.angle26=Obj[key];v1++}
									if(key.search("y27value")!==-1){bg1.angle27=Obj[key];v1++}
									if(key.search("y28value")!==-1){bg1.angle28=Obj[key];v1++}
									if(key.search("y29value")!==-1){bg1.angle29=Obj[key];v1++}
									if(key.search("y30value")!==-1){bg1.angle30=Obj[key];v1++}
									//高级
									if(key.search("senior1")!==-1){bg1.senior1=Obj[key];s1++}
									if(key.search("senior2")!==-1){bg1.senior2=Obj[key];s1++}
									if(key.search("senior3")!==-1){bg1.senior3=Obj[key];s1++}
									if(key.search("senior4")!==-1){bg1.senior4=Obj[key];s1++}
									if(key.search("senior5")!==-1){bg1.senior5=Obj[key];s1++}
									//普通
									if(key.search("normal1")!==-1){bg1.normal1=Obj[key];n1++}
									if(key.search("normal2")!==-1){bg1.normal2=Obj[key];n1++}
									if(key.search("normal3")!==-1){bg1.normal3=Obj[key];n1++}
									if(key.search("normal4")!==-1){bg1.normal4=Obj[key];n1++}
									if(key.search("normal5")!==-1){bg1.normal5=Obj[key];n1++}
									if(v1==31&&s1==6&&n1==6){
										bg1.homeLocationFlag="1"
										console.log(bg1)
										console.log("加入成功")
										veArray.push(bg1)
										bg1={}
									}
								}
							}
							//22222
							for (let key in Obj) {
								if (key.search("planeness")!==-1){
									//angle
									if(key.search("s1value")!==-1){bg1.angle1=Obj[key];v2++}
									if(key.search("s2value")!==-1){bg1.angle2=Obj[key];v2++}
									if(key.search("s3value")!==-1){bg1.angle3=Obj[key];v2++}
									if(key.search("s4value")!==-1){bg1.angle4=Obj[key];v2++}
									if(key.search("s5value")!==-1){bg1.angle5=Obj[key];v2++}
									if(key.search("s6value")!==-1){bg1.angle6=Obj[key];v2++}
									if(key.search("s7value")!==-1){bg1.angle7=Obj[key];v2++}
									if(key.search("s8value")!==-1){bg1.angle8=Obj[key];v2++}
									if(key.search("s9value")!==-1){bg1.angle9=Obj[key];v2++}
									if(key.search("s10value")!==-1){bg1.angle10=Obj[key];v2++}
									if(key.search("s11value")!==-1){bg1.angle11=Obj[key];v2++}
									if(key.search("s12value")!==-1){bg1.angle12=Obj[key];v2++}
									if(key.search("s13value")!==-1){bg1.angle13=Obj[key];v2++}
									if(key.search("s14value")!==-1){bg1.angle14=Obj[key];v2++}
									if(key.search("s15value")!==-1){bg1.angle15=Obj[key];v2++}
									if(key.search("s16value")!==-1){bg1.angle16=Obj[key];v2++}
									if(key.search("s17value")!==-1){bg1.angle17=Obj[key];v2++}
									if(key.search("s18value")!==-1){bg1.angle18=Obj[key];v2++}
									if(key.search("s19value")!==-1){bg1.angle19=Obj[key];v2++}
									if(key.search("s20value")!==-1){bg1.angle20=Obj[key];v2++}
									if(key.search("s21value")!==-1){bg1.angle21=Obj[key];v2++}
									if(key.search("s22value")!==-1){bg1.angle22=Obj[key];v2++}
									if(key.search("s23value")!==-1){bg1.angle23=Obj[key];v2++}
									if(key.search("s24value")!==-1){bg1.angle24=Obj[key];v2++}
									if(key.search("s25value")!==-1){bg1.angle25=Obj[key];v2++}
									if(key.search("s26value")!==-1){bg1.angle26=Obj[key];v2++}
									if(key.search("s27value")!==-1){bg1.angle27=Obj[key];v2++}
									if(key.search("s28value")!==-1){bg1.angle28=Obj[key];v2++}
									if(key.search("s29value")!==-1){bg1.angle29=Obj[key];v2++}
									if(key.search("s30value")!==-1){bg1.angle30=Obj[key];v2++}
									//高级
									if(key.search("senior1")!==-1){bg1.senior1=Obj[key];s2++}
									if(key.search("senior2")!==-1){bg1.senior2=Obj[key];s2++}
									if(key.search("senior3")!==-1){bg1.senior3=Obj[key];s2++}
									if(key.search("senior4")!==-1){bg1.senior4=Obj[key];s2++}
									if(key.search("senior5")!==-1){bg1.senior5=Obj[key];s2++}
									//普通
									if(key.search("normal1")!==-1){bg1.normal1=Obj[key];n2++}
									if(key.search("normal2")!==-1){bg1.normal2=Obj[key];n2++}
									if(key.search("normal3")!==-1){bg1.normal3=Obj[key];n2++}
									if(key.search("normal4")!==-1){bg1.normal4=Obj[key];n2++}
									if(key.search("normal5")!==-1){bg1.normal5=Obj[key];n2++}
									if(v2==31&&s2==6&&n2==6){
										bg1.homeLocationFlag="2"
										console.log(bg1)
										console.log("加入成功2")
										veArray.push(bg1)
										bg1={}
									}
								}
							}
							//333333
							for (let key in Obj) {
								if (key.search("yyj")!==-1){
									//angle
									if(key.search("j1value")!==-1){bg1.angle1=Obj[key];v3++}
									if(key.search("j2value")!==-1){bg1.angle2=Obj[key];v3++}
									if(key.search("j3value")!==-1){bg1.angle3=Obj[key];v3++}
									if(key.search("j4value")!==-1){bg1.angle4=Obj[key];v3++}
									if(key.search("j5value")!==-1){bg1.angle5=Obj[key];v3++}
									if(key.search("j6value")!==-1){bg1.angle6=Obj[key];v3++}
									if(key.search("j7value")!==-1){bg1.angle7=Obj[key];v3++}
									if(key.search("j8value")!==-1){bg1.angle8=Obj[key];v3++}
									if(key.search("j9value")!==-1){bg1.angle9=Obj[key];v3++}
									if(key.search("j10value")!==-1){bg1.angle10=Obj[key];v3++}
									if(key.search("j11value")!==-1){bg1.angle11=Obj[key];v3++}
									if(key.search("j12value")!==-1){bg1.angle12=Obj[key];v3++}
									if(key.search("j13value")!==-1){bg1.angle13=Obj[key];v3++}
									if(key.search("j14value")!==-1){bg1.angle14=Obj[key];v3++}
									if(key.search("j15value")!==-1){bg1.angle15=Obj[key];v3++}
									if(key.search("j16value")!==-1){bg1.angle16=Obj[key];v3++}
									if(key.search("j17value")!==-1){bg1.angle17=Obj[key];v3++}
									if(key.search("j18value")!==-1){bg1.angle18=Obj[key];v3++}
									if(key.search("j19value")!==-1){bg1.angle19=Obj[key];v3++}
									if(key.search("j20value")!==-1){bg1.angle20=Obj[key];v3++}
									if(key.search("j21value")!==-1){bg1.angle21=Obj[key];v3++}
									if(key.search("j22value")!==-1){bg1.angle22=Obj[key];v3++}
									if(key.search("j23value")!==-1){bg1.angle23=Obj[key];v3++}
									if(key.search("j24value")!==-1){bg1.angle24=Obj[key];v3++}
									if(key.search("j25value")!==-1){bg1.angle25=Obj[key];v3++}
									if(key.search("j26value")!==-1){bg1.angle26=Obj[key];v3++}
									if(key.search("j27value")!==-1){bg1.angle27=Obj[key];v3++}
									if(key.search("j28value")!==-1){bg1.angle28=Obj[key];v3++}
									if(key.search("j29value")!==-1){bg1.angle29=Obj[key];v3++}
									if(key.search("j30value")!==-1){bg1.angle30=Obj[key];v3++}
									//高级
									if(key.search("senior1")!==-1){bg1.senior1=Obj[key];s3++}
									if(key.search("senior2")!==-1){bg1.senior2=Obj[key];s3++}
									if(key.search("senior3")!==-1){bg1.senior3=Obj[key];s3++}
									if(key.search("senior4")!==-1){bg1.senior4=Obj[key];s3++}
									if(key.search("senior5")!==-1){bg1.senior5=Obj[key];s3++}
									//普通
									if(key.search("normal1")!==-1){bg1.normal1=Obj[key];n3++}
									if(key.search("normal2")!==-1){bg1.normal2=Obj[key];n3++}
									if(key.search("normal3")!==-1){bg1.normal3=Obj[key];n3++}
									if(key.search("normal4")!==-1){bg1.normal4=Obj[key];n3++}
									if(key.search("normal5")!==-1){bg1.normal5=Obj[key];n3++}
									if(v3==31&&s3==6&&n3==6){
										bg1.homeLocationFlag="3"
										console.log(bg1)
										console.log("加入成功3")
										veArray.push(bg1)
										bg1={}
									}
								}
							}
							//4444444444
							for (let key in Obj) {
								if (key.search("bay")!==-1){
									//angle
									if(key.search("y1value")!==-1){bg1.angle1=Obj[key];v4++}
									if(key.search("y2value")!==-1){bg1.angle2=Obj[key];v4++}
									if(key.search("y3value")!==-1){bg1.angle3=Obj[key];v4++}
									if(key.search("y4value")!==-1){bg1.angle4=Obj[key];v4++}
									if(key.search("y5value")!==-1){bg1.angle5=Obj[key];v4++}
									if(key.search("y6value")!==-1){bg1.angle6=Obj[key];v4++}
									if(key.search("y7value")!==-1){bg1.angle7=Obj[key];v4++}
									if(key.search("y8value")!==-1){bg1.angle8=Obj[key];v4++}
									if(key.search("y9value")!==-1){bg1.angle9=Obj[key];v4++}
									if(key.search("y10value")!==-1){bg1.angle10=Obj[key];v4++}
									if(key.search("y11value")!==-1){bg1.angle11=Obj[key];v4++}
									if(key.search("y12value")!==-1){bg1.angle12=Obj[key];v4++}
									if(key.search("y13value")!==-1){bg1.angle13=Obj[key];v4++}
									if(key.search("y14value")!==-1){bg1.angle14=Obj[key];v4++}
									if(key.search("y15value")!==-1){bg1.angle15=Obj[key];v4++}
									if(key.search("y16value")!==-1){bg1.angle16=Obj[key];v4++}
									if(key.search("y17value")!==-1){bg1.angle17=Obj[key];v4++}
									if(key.search("y18value")!==-1){bg1.angle18=Obj[key];v4++}
									if(key.search("y19value")!==-1){bg1.angle19=Obj[key];v4++}
									if(key.search("y20value")!==-1){bg1.angle20=Obj[key];v4++}
									if(key.search("y21value")!==-1){bg1.angle21=Obj[key];v4++}
									if(key.search("y22value")!==-1){bg1.angle22=Obj[key];v4++}
									if(key.search("y23value")!==-1){bg1.angle23=Obj[key];v4++}
									if(key.search("y24value")!==-1){bg1.angle24=Obj[key];v4++}
									if(key.search("y25value")!==-1){bg1.angle25=Obj[key];v4++}
									if(key.search("y26value")!==-1){bg1.angle26=Obj[key];v4++}
									if(key.search("y27value")!==-1){bg1.angle27=Obj[key];v4++}
									if(key.search("y28value")!==-1){bg1.angle28=Obj[key];v4++}
									if(key.search("y29value")!==-1){bg1.angle29=Obj[key];v4++}
									if(key.search("y30value")!==-1){bg1.angle30=Obj[key];v4++}
									//高级
									if(key.search("senior1")!==-1){bg1.senior1=Obj[key];s4++}
									if(key.search("senior2")!==-1){bg1.senior2=Obj[key];s4++}
									if(key.search("senior3")!==-1){bg1.senior3=Obj[key];s4++}
									if(key.search("senior4")!==-1){bg1.senior4=Obj[key];s4++}
									if(key.search("senior5")!==-1){bg1.senior5=Obj[key];s4++}
									//普通
									if(key.search("normal1")!==-1){bg1.normal1=Obj[key];n4++}
									if(key.search("normal2")!==-1){bg1.normal2=Obj[key];n4++}
									if(key.search("normal3")!==-1){bg1.normal3=Obj[key];n4++}
									if(key.search("normal4")!==-1){bg1.normal4=Obj[key];n4++}
									if(key.search("normal5")!==-1){bg1.normal5=Obj[key];n4++}
									if(v4==31&&s4==6&&n4==6){
										bg1.homeLocationFlag="4"
										console.log(bg1)
										console.log("加入成功4")
										veArray.push(bg1)
										bg1={}
									}
								}
							}
							//5555555555
							for (let key in Obj) {
								if (key.search("humidity")!==-1){
									//angle
									if(key.search("y1value")!==-1){bg1.angle1=Obj[key];v5++}
									if(key.search("y2value")!==-1){bg1.angle2=Obj[key];v5++}
									if(key.search("y3value")!==-1){bg1.angle3=Obj[key];v5++}
									if(key.search("y4value")!==-1){bg1.angle4=Obj[key];v5++}
									if(key.search("y5value")!==-1){bg1.angle5=Obj[key];v5++}
									if(key.search("y6value")!==-1){bg1.angle6=Obj[key];v5++}
									if(key.search("y7value")!==-1){bg1.angle7=Obj[key];v5++}
									if(key.search("y8value")!==-1){bg1.angle8=Obj[key];v5++}
									if(key.search("y9value")!==-1){bg1.angle9=Obj[key];v5++}
									if(key.search("y10value")!==-1){bg1.angle10=Obj[key];v5++}
									if(key.search("y11value")!==-1){bg1.angle11=Obj[key];v5++}
									if(key.search("y12value")!==-1){bg1.angle12=Obj[key];v5++}
									if(key.search("y13value")!==-1){bg1.angle13=Obj[key];v5++}
									if(key.search("y14value")!==-1){bg1.angle14=Obj[key];v5++}
									if(key.search("y15value")!==-1){bg1.angle15=Obj[key];v5++}
									if(key.search("y16value")!==-1){bg1.angle16=Obj[key];v5++}
									if(key.search("y17value")!==-1){bg1.angle17=Obj[key];v5++}
									if(key.search("y18value")!==-1){bg1.angle18=Obj[key];v5++}
									if(key.search("y19value")!==-1){bg1.angle19=Obj[key];v5++}
									if(key.search("y20value")!==-1){bg1.angle20=Obj[key];v5++}
									if(key.search("y21value")!==-1){bg1.angle21=Obj[key];v5++}
									if(key.search("y22value")!==-1){bg1.angle22=Obj[key];v5++}
									if(key.search("y23value")!==-1){bg1.angle23=Obj[key];v5++}
									if(key.search("y24value")!==-1){bg1.angle24=Obj[key];v5++}
									if(key.search("y25value")!==-1){bg1.angle25=Obj[key];v5++}
									if(key.search("y26value")!==-1){bg1.angle26=Obj[key];v5++}
									if(key.search("y27value")!==-1){bg1.angle27=Obj[key];v5++}
									if(key.search("y28value")!==-1){bg1.angle28=Obj[key];v5++}
									if(key.search("y29value")!==-1){bg1.angle29=Obj[key];v5++}
									if(key.search("y30value")!==-1){bg1.angle30=Obj[key];v5++}
									//高级
									if(key.search("senior1")!==-1){bg1.senior1=Obj[key];s5++}
									if(key.search("senior2")!==-1){bg1.senior2=Obj[key];s5++}
									if(key.search("senior3")!==-1){bg1.senior3=Obj[key];s5++}
									if(key.search("senior4")!==-1){bg1.senior4=Obj[key];s5++}
									if(key.search("senior5")!==-1){bg1.senior5=Obj[key];s5++}
									//普通
									if(key.search("normal1")!==-1){bg1.normal1=Obj[key];n5++}
									if(key.search("normal2")!==-1){bg1.normal2=Obj[key];n5++}
									if(key.search("normal3")!==-1){bg1.normal3=Obj[key];n5++}
									if(key.search("normal4")!==-1){bg1.normal4=Obj[key];n5++}
									if(key.search("normal5")!==-1){bg1.normal5=Obj[key];n5++}
									if(v5==31&&s5==6&&n5==6){
										bg1.homeLocationFlag="5"
										console.log(bg1)
										console.log("加入成功5")
										veArray.push(bg1)
										bg1={}
									}
								}
							}
						console.log("=================================")
						console.log(jgArray)
						console.log(bgArray)
						console.log(veArray)
						self.jgArr=JSON.stringify(jgArray)
						self.bgArr=JSON.stringify(bgArray)
						self.veArr=JSON.stringify(veArray)
						console.log("=================================")
						console.log(self.jgArr)
						console.log(self.bgArr)
						console.log(self.veArr)
						// var dataM=new Object;
						// dataM.homeMeasureCleanHightList=jgArray;
						// dataM.homeMeasureStandardHightList=bgArray;
						// dataM.homeMeasureAngleList=veArray;
						// var dataJSON= JSON.stringify(dataM)
						// console.log("111111111111111111111111111111111111111111111111111")
						// console.log(dataM)
						// console.log("111111111111111111111111111111111111111111111111111")
						// console.log(dataJSON)
						const app = getApp()
						console.log(app.globalData.ctx)
						if(jgArray!==[]&&bgArray!==[]&&veArray!==[]){
							uni.request({
							url: app.globalData.ctx+'/home/homeMeasure/add',
							method: 'POST',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							data: {
								"homeMeasureAngleList": veArray,
								"homeMeasureCleanHightList":jgArray,
								"homeMeasureStandardHightList":	bgArray
							},
							success: res => {
								console.log("成功")
								console.log(res)
								uni.showToast({
								    title: '数据上传成功',
									icon:'none' 
								});
								
							},
							fail: () => {
								console.log("失败")
								uni.showToast({
								    title: '数据上传失败',
									icon:'none'
								});
							},
							complete: () => {
								self.ac=true;
								self.tab="left:0upx;transition:.3s;";
								self.sub="left:750upx;transition:.3s;";
							}
						});
						}else{
							console.log("空")
						}
						
				},
				// judgeValue:(e)=>{
				// 	console.log(e)
				// 	self.measure[e.target.offsetTop]=e.target.value;
				// 	console.log(self.measure[e.target.offsetTop])
				// 	if(self.measure[e.target.offsetTop]&&self.standard[e.target.offsetTop]){
				// 		if(self.measure[e.target.offsetTop]>self.standard[e.target.offsetTop]){
				// 			self.red=true;
				// 		}else{
				// 			self.red=false;
				// 		}
				// 	}
				// },
				// judgeStandard:(e)=>{
				// 	self.standard[e.target.offsetTop]=e.target.value;
				// 	console.log(self.standard[e.target.offsetTop])
				// 	if(self.measure[e.target.offsetTop]&&self.standard[e.target.offsetTop]){
				// 		if(self.measure[e.target.offsetTop]>self.standard[e.target.offsetTop]){
				// 			self.red=true;
				// 		}else{
				// 			self.red=false;
				// 		}
				// 	}
				// },
				choiceItem:(e)=>{
					console.log(e.detail)
					console.log(e.detail.value)
					self.jgshow=false
					self.bgshow=false
					self.czdshow=false
					self.pzdshow=false
					self.yyjshow=false
					self.kjshow=false
					self.sdshow=false
					for (var i = 0; i < e.detail.value.length; i++) {
					 	if(e.detail.value[i]=="m1"){
							self.jgshow=true
						}
						if(e.detail.value[i]=="m2"){
							self.bgshow=true
						}
						if(e.detail.value[i]=="m3"){
							self.czdshow=true
						}
						if(e.detail.value[i]=="m4"){
							self.pzdshow=true
						}
						if(e.detail.value[i]=="m5"){
							self.yyjshow=true
						}
						if(e.detail.value[i]=="m6"){
							self.kjshow=true
						}
						if(e.detail.value[i]=="m7"){
							self.sdshow=true
						}
					}
				},
				judgeJG:(e)=>{
					console.log(e.target)
					let index=e.target.id.toString().substr(2,1)
					let indexType=e.target.id.toString().substr(3,1)
					console.log(index)
					console.log(indexType)
					self.JGDobj[indexType][index]=e.target.value
					if(e.target.value==""){
						delete self.JGDobj[indexType][index]
					}
					console.log(self.JGDobj)
					let arr=[]
					for (let key in self.JGDobj[indexType]) {
						if(self.JGDobj[indexType][key]!==""){
							arr.push(self.JGDobj[indexType][key])
						}
						
					}
					if(arr.length>1){
						arr.sort(function(a,b){
							return a-b
						})
						console.log(arr)
						self.JGDvalue[indexType]=arr[arr.length-1]-arr[0]
						console.log(indexType)
						console.log(self.JGDvalue[indexType])
						self.JGDvalue[100]=0
						self.JGDvalue.pop()
					}
					
				},
				enterJG:(e)=>{
					console.log(e)
					console.log(e.target)
					let index=e.target.id.toString().substr(5,1)
					// self.JGDobj[index]=new Object
					console.log(index)
					if(e.target.value==""){
						self.roomtype[index].disabled=true
						self.JGDobj[index]={0:"",1:"",2:"",3:"",4:""}
						self.JGDvalue[index]=""
					}else{
						self.roomtype[index].disabled=false
					}
					self.JGstandard[index]=e.target.value
					self.JGstandard.push("0")
					self.JGstandard.pop()
					
				},
				enterJGStandard:(e)=>{
					console.log(e)
					let index=e.target.id.toString().substr(3,1)
					console.log(index)
					if(self.JGstandard[index]==""){
						uni.showToast({
							title: '请输入标准值',
							icon:"none"
						});
					}
				},
				judgeBG:(e)=>{
					console.log(e.target)
					let index=e.target.id.toString().substr(2,1)
					let indexType=e.target.id.toString().substr(3,1)
					console.log(index)
					console.log(indexType)
					self.BGDobj[indexType][index]=e.target.value
					if(e.target.value==""){
						delete self.BGDobj[indexType][index]
					}
					console.log(self.BGDobj)
					let arr=[]
					for (let key in self.BGDobj[indexType]) {
						if(self.BGDobj[indexType][key]!==""){
							arr.push(self.BGDobj[indexType][key])
						}
						
					}
					if(arr.length>1){
						arr.sort(function(a,b){
							return a-b
						})
						console.log(arr)
						self.BGDvalue[indexType]=arr[arr.length-1]-arr[0]
						console.log(indexType)
						console.log(self.BGDvalue[indexType])
						self.BGDvalue[100]=0
						self.BGDvalue.pop()
					}
					
				},
				enterBG:(e)=>{
					console.log(e)
					console.log(e.target)
					let index=e.target.id.toString().substr(5,1)
					// self.BGDobj[index]=new Object
					console.log(index)
					if(e.target.value==""){
						self.roomtype[index].disabled2=true
						self.BGDobj[index]={0:"",1:"",2:"",3:"",4:""}
						self.BGDvalue[index]=""
					}else{
						self.roomtype[index].disabled2=false
					}
					self.BGstandard[index]=e.target.value
					self.BGstandard.push("0")
					self.BGstandard.pop()
				},
				enterBGStandard:(e)=>{
					console.log(e)
					let index=e.target.id.toString().substr(3,1)
					console.log(index)
					if(self.BGstandard[index]==""){
						uni.showToast({
							title: '请输入标准值',
							icon:"none"
						});
					}
				},
				enterBayValue:(e)=>{
					let index
					if(e.target.id.length==4){
						index=parseInt(e.target.id.toString().substr(3,1))
					}else{
						index=parseInt(e.target.id.toString().substr(3,2))
					}
					console.log(index)
					self.bayValue[index]=e.target.value
					console.log(self.bayValue)
					if((index+2)%3==0&&self.bayValue[index+1]!==""){
						
						self.bayValue[index+2]=Math.abs(self.bayValue[index]-self.bayValue[index+1]).toString()
						console.log(self.bayValue[index+2])
						self.bayValue.push("0")
						self.bayValue.pop()
					}
					if((index+1)%3==0&&self.bayValue[index-1]!==""){
						
						self.bayValue[index+1]=Math.abs(self.bayValue[index]-self.bayValue[index-1]).toString()
						console.log(self.bayValue[index+1])
						self.bayValue.push("0")
						self.bayValue.pop()
					}
				},
				enterBayStandard:(e)=>{
					console.log(e)
					setTimeout(()=>{self.bayStandard=e.detail.value},0)
					// if(e.detail.value!==""){
					// 	let arr=self.bayValue
						
					// 	setTimeout(()=>{self.bayValue=arr},0)
					// 	self.bayValue.push("0")
					// 	self.bayValue.pop()
					// 	console.log("111111")
					// }else{
					// 	for (var i = 1; i < 31; i++) {
					// 		self.bayValue[i]=""
					// 	}
					// 	self.bayValue.push("0")
					// 	self.bayValue.pop()
					// 	console.log("222222")
					// 	console.log(self.bayValue)
					// }
					
					
					
					
		
						for (var i = 1; i < 31; i++) {
							self.bayValue[i]=""
						}
						self.bayValue.push("0")
						self.bayValue.pop()
						console.log(self.bayValue)
					
					// setTimeout(()=>{self.bayValue=self.bayValue},0)
					// self.bayValue.push("0")
					// self.bayValue.pop()
				},
				judgeBay:()=>{
					if(self.bayStandard==""){
						uni.showToast({
							title: '请输入标准值',
							icon:'none'
						});
					}
				},
				enterAllStandard:(e)=>{
					console.log(e.target)
					setTimeout(() => { 
						self.baytype[e.target.id].standard=e.target.value 
						console.log(e.target.id,self.baytype[e.target.id].standard)
						self.baytype.push([])
						self.baytype.pop()
					}, 0)
					if(e.target.id==0){
						self.verticalityStandard=e.target.value
						self.baytype[e.target.id].disabled=false
						self.baytype.push([])
						self.baytype.pop()
						if(self.verticalityStandard==""){
							for (let i = 1; i < 31; i++) {
								setTimeout(() => { self.baytype[e.target.id].valueArr[i]="" }, 0)
							}
							setTimeout(() => { self.baytype[e.target.id].disabled=true }, 10)
							console.log(self.baytype[e.target.id].valueArr)
						}
					}else if(e.target.id==1){
						self.planenessStandard=e.target.value
						self.baytype[e.target.id].disabled=false
						self.baytype.push([])
						self.baytype.pop()
						if(self.planenessStandard==""){
							for (let i = 1; i < 31; i++) {
								setTimeout(() => { self.baytype[e.target.id].valueArr[i]="" }, 0)
							}
							setTimeout(() => { self.baytype[e.target.id].disabled=true }, 10)
							console.log(self.baytype[e.target.id].valueArr)
							}
					}else if(e.target.id==2){
						self.yyjStandard=e.target.value
						self.baytype[e.target.id].disabled=false
						self.baytype.push([])
						self.baytype.pop()
						if(self.yyjStandard==""){
							for (let i = 1; i < 31; i++) {
								setTimeout(() => { self.baytype[e.target.id].valueArr[i]="" }, 0)
							}
							setTimeout(() => { self.baytype[e.target.id].disabled=true }, 10)
							console.log(self.baytype[e.target.id].valueArr)
							}
					}else if(e.target.id==3){
						self.humidityStandard=e.target.value
						self.baytype[e.target.id].disabled=false
						self.baytype.push([])
						self.baytype.pop()
						if(self.humidityStandard==""){
							for (let i = 1; i < 31; i++) {
								setTimeout(() => { self.baytype[e.target.id].valueArr[i]="" }, 0)
							}
							setTimeout(() => { self.baytype[e.target.id].disabled=true }, 10)
							console.log(self.baytype[e.target.id].valueArr)
					}
					}
					console.log(self.verticalityStandard,self.planenessStandard,self.yyjStandard,self.humidityStandard)
					self.baytype.push([])
					self.baytype.pop()
				},
				enterAllTypeValue:(e)=>{
					console.log(e.target)
					let index1,index2
					index1=e.target.id.toString().substr(3,1)
					console.log(index1)
					if(e.target.id.toString().length==5){
						index2=e.target.id.toString().substr(4,1)
					}else{
						index2=e.target.id.toString().substr(4,2)
					}
					console.log(index2)
					setTimeout(() => { 
						self.baytype[index1].valueArr[index2]=e.target.value
						console.log(self.baytype[index1].valueArr)
						self.baytype.push([])
						self.baytype.pop()
					}, 0)
					
					// if(index1==0){
					// 	self.baytype[index1].valueArr[index2]=e.target.value
					// 	console.log(self.baytype[index1].valueArr)
					// }else if(index1==1){
					// 	self.planenessValue[index2]=e.target.value
					// 	console.log(self.planenessValue)
					// }else if(index1==2){
					// 	self.yyjValue[index2]=e.target.value
					// 	console.log(self.yyjValue)
					// }else if(index1==3){
					// 	self.humidityValue[index2]=e.target.value
					// 	console.log(self.humidityValue)
					// }
				},
				showAllTip:(e)=>{
					let index1=e.target.id.toString().substr(3,1)
					if(self.baytype[index1].disabled==true){
						uni.showToast({
							title: '请输入标准值',
							icon:'none'
						});
					}
				},
				moveHandle:()=>{
				},
			}
	}
</script>

<style>
	.details_content{
		height: 85vh;
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
	.show_container{
		width: 750upx;
		height: 100%;
		overflow: hidden;
	}
	.details_container{
		position: relative;
		width: 1520upx;
	}
	.half{
		display: inline-block;
		width: 750upx;
		height: 80vh;
		float: left;
	}
.picker_container{ 
	height: 100upx;
	white-space: nowrap;
	}
	.picker{
		display: inline-block;
		width: 47%;
		float: left;
		border: #ddd 1px solid;
		border-radius: 10upx;
		margin: 1%;
		color: #00B4FF;
		text-indent: 5%;
		}
		.arrow{
			position: relative;
			float: right;
			top: 0;
			display: inline-block;
			width: 40upx;
			height: 40upx;
			overflow: hidden;
			margin-top: 8%;
			margin-right: 2%;
		}
		
.newly_problem{
	width: 100%;
	margin-bottom: 2%;
	}
	.newly_botton{
		display: inline-block;
		width: 70%;
		margin: 0 15%;
		border: #ddd 1px solid;
		color: #666;
		border-radius: 15upx;
		text-align: center;
	}


.img_container{
	margin: 2%;
	}
	.img{
		display: block;
		width: 90%;
		height: 25vh;
		margin: 0 5% 0 5%;
	}


.problemlist{
	width: 100%;
	height: 50vh;
	overflow: hidden;
	}
	.problem:first-child{
		border-top: #ddd 1px solid;
	}
	.problem{
		width: 100%;
		height: 150upx;
		border-bottom: #ddd 1px solid;
		}
		.top{
			height: 40upx;
			white-space: nowrap;
		}
		.color{
			display: inline-block;
			position: relative;
			border-radius: 10upx;
			left: -520upx;
			width: 15upx;
			height: 35upx;
			margin-top: 1%;
			margin-left: 5%;
		}
		.color_red{
			background-color: #eb3226;
		}
		.color_green{
			background-color: #a5d255;
		}
		.main_item{
			float: left;
			display: inline-block;
			width: 70%;
			color: #333;
			text-indent: 60upx;
			font-size: 35upx;
		}
		.problem_content{
			display: inline-block;
			float: left;
			width: 70%;
			text-indent: 70upx;
			font-size: 30upx;
			color: #999;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.date{
			display: inline-block;
			width: 70%;
			float: left;
			text-indent: 70upx;
			font-size: 30upx;
			color: #999;
		}
		.sate{
			display: inline-block;
			font-size: 35upx;
			width: 30%;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			position: relative;
			right: 0upx;
			top:0upx;
			}
			.state text{
				margin-left: 5upx;
			}
			.dot{
				display: inline-block;
				width: 28upx;
				height: 28upx;
				border-radius: 50%;
			}

.progress_container{
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #fff;
	}
	.progress{
		width: 90%;
		margin: 0 5%; 
		}
		
		.text{ 
			font-size: 35upx; 
		}



/* //实测实量 */
		input{
			border-radius: 10upx;
		}
		.basic_headline{
			color: #00b4ff;
			border-bottom: 0;
			border-top: 0;
			font-size: 40upx;
		}
		.content{
			display: inline-block;
			width: 100%;
			padding-bottom: 2%;
			line-height: 50upx;
			font-size: 30upx;
			white-space: nowrap;
			}
			.roomtype{
				margin-left: 2%;
				font-size: 35upx;
				color: #333;
			}
			.standard{
				float: right;
				margin-right: 5%;
				color: #333;
			}
			.right1{
				margin-left: 27%;
				color: #999;
			}
			.right2{
				margin-left: 28%;
				color: #999;
			}
			.data_content{
				display: inline-block;
				width: 75%;
				}
				.wrap{
					white-space: normal;
					}
				    .manyinput{
						display: inline-block;
						width: 70upx;
						background-color: #fff;
						margin-left: 3%;
						margin-top: 1%;
						border: 1px solid #ddd;
					}
				
					.inputcontent{
					width: 100%;
					margin-top: 3%;
					height: 60upx;
					text-indent: 2%;
					}
					.inputtitle{
						display: inline-block;
						width: 20%;
						vertical-align: top;
						}
						 .inputtitle text{
							color: #666;
						}
						.inputvalue{
						display: inline-block;
						width: 75%;
						border: 1px solid #ddd;
						}
		.standard_container{
			display: inline-block;
				width: 20%;
				height: 355upx;
				margin-left: 3%;
				margin-top: 2%;
				vertical-align: top;
				}
				.inputstandard{
				display: inline-block;
				width: 85%;
				margin-left: 2%;
				/* margin-top: 155upx; */
				border: 1px solid #ddd;
				border-radius: 10upx;
				height: 40upx;
				}
				.right_title{
					text-align: center;
					color: #333;
				}
		.standard_container2{
			display: inline-block;
			width: 23%;
			margin-left: 3%;
			vertical-align: top;
			white-space: nowrap;
			margin-bottom: 150upx;
			}
			.standard_half{
				display: inline-block;
				width: 50%;
				vertical-align: top;
				white-space: normal;
				}
			.standard_half .manyinput{
					display: inline-block;
					width: 70upx;
					background-color: #fff;
					margin-top: 6%;
					border: 1px solid #ddd;
				}
				.submit_container{
					position: fixed;
					bottom: 0;
					background-color: #fff;
					height: 10vh;
					width: 100%;
				}
				.submit{
					background-color: #00B4FF;
					width: 75%;
					margin: 0 12.5% 10upx 12.5%;
				}

</style>
