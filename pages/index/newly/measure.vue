<template>
	<!-- 本页样式在css最后,样式独立 -->
	<view class="measure_container">
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="submitMeasure">
					<!-- 净高数据输入 -->
					<view class="basic_headline">
						<text>净高</text>
					</view>
					<view class="data_container">
						<view class="content" v-for="t in roomtype">
							<view>
								<text class="roomtype">{{t.type}}</text>
								<text class="standard">标准值</text>
							</view>
							<view class="data_content">
								
								<view class="inputcontent" v-for="d in direction">
								<view class="inputtitle"><text>{{d.direction}}</text></view>
								<input class="inputvalue" :style="d.warm"  :name="'JG_'+t.name+'_'+d.name+'_value'" type="number" @blur="judgeValue">
						</view>
							</view>
							<view class="standard_container">
								
								<input class="inputstandard" name="'JG_parlour_standard" type="number" @blur="judgeStandard">
							</view>
						</view>
					</view>
					
					<!-- 标高数据输入 -->
					<view class="basic_headline">
						<text>标高</text>
					</view>
					<view class="data_container">
						<view class="content" v-for="t in roomtype">
							<view>
								<text class="roomtype">{{t.type}}</text>
								<text class="standard">标准值</text>
							</view>
							<view class="data_content">
								
								<view class="inputcontent" v-for="d in direction">
								<view class="inputtitle"><text>{{d.direction}}</text></view>
								<input class="inputvalue" :style="d.warm"  :name="'JG_'+t.name+'_'+d.name+'_value'" type="number" @blur="judgeValue">
						</view>
							</view>
							<view class="standard_container">
								
								<input class="inputstandard" name="'JG_parlour_standard" type="number" @blur="judgeStandard">
							</view>
						</view>
					</view>
					<!-- 垂直度、平整度、阴阳角、开间、湿度 -->
					<view class="data_container2">
						<view class="content" v-for="t in baytype">
							<view>
								<text class="roomtype">{{t.type}}</text>
								<text class="standard">标准值</text>
							</view>
							<view>
								<text class="right1">高级</text>
								<text class="right2">普通</text>
							</view>
							<view class="data_content">
								<view class="wrap">
									<input class="manyinput" type="number" v-for="num in number" :name="'name'+num" />
								</view>
								
							</view>
							<view class="standard_container2">
								<view class="half">
									<input class="manyinput" type="number" v-for="num2 in number2" :name="'name2'+num2" />
								</view>
								<view class="half">
									<input class="manyinput" type="number" v-for="num2 in number2" :name="'name3'+num2" />
								</view>
							</view>
						</view>
					</view>
					
					<button class="submit" form-type="submit" type="primary">提交</button>
				</form>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(){
			self=this;
			for (var i = 0; i < 30; i++) {
				self.number.push(i)
			}
			console.log(self.number)
		},
		data(){
			return{
				roomtype:[
					{type:"客厅",name:"parlour"},
					{type:"主卧",name:"masterroom"},
					{type:"次卧",name:"secondroom"},
					{type:"书房",name:"study"}
				],
				direction:[
					{direction:"左上:",name:"lt",warm:"color:#f00"},
					{direction:"右上:",name:"rt,",warm:"color:#f00"},
					{direction:"右下:",name:"rb",warm:"color:#f00"},
					{direction:"左下:",name:"lb",warm:"color:#f00"},
					{direction:"中间:",name:"middle",warm:"color:#f00"}
					],
				measure:[],
				standard:[],
				red:false,
				baytype:[
					{type:"垂直度",name:"verticality"},
					{type:"平整度",name:"planeness"},
					{type:"阴阳角",name:"yyj"},
					{type:"开间",name:"bay"},
					{type:"湿度",name:"humidity"}
					],
				number:[],
				number2:[1,2,3,4,5]
					
					
			}
		},
		methods:{
			submitMeasure:(e)=>{
				console.log(e)
			},
			judgeValue:(e)=>{
				console.log(e)
				self.measure[e.target.offsetTop]=e.target.value;
				console.log(self.measure[e.target.offsetTop])
				if(self.measure[e.target.offsetTop]&&self.standard[e.target.offsetTop]){
					if(self.measure[e.target.offsetTop]>self.standard[e.target.offsetTop]){
						self.red=true;
					}else{
						self.red=false;
					}
				}
			},
			judgeStandard:(e)=>{
				self.standard[e.target.offsetTop]=e.target.value;
				console.log(self.standard[e.target.offsetTop])
				if(self.measure[e.target.offsetTop]&&self.standard[e.target.offsetTop]){
					if(self.measure[e.target.offsetTop]>self.standard[e.target.offsetTop]){
						self.red=true;
					}else{
						self.red=false;
					}
				}
			}
		}
	}
</script>

<style>
</style>
