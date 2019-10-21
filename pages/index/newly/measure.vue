<template>
	<view class="measure_container">
		<form @submit="submitMeasure">
			<!-- 净高数据输入 -->
			<view class="m_title"><text>净高</text></view>
			<view class="m_content" v-for="t in roomtype">
				<text class="m_type">{{t.type}}</text>
				<text class="m_standard">标准值</text>
				<view class="m_inputcontent" v-for="d in direction">
					<view class="m_inputtext"><text>{{d.direction}}</text></view>
					<input class="m_inputvalue" :style="d.warm"  :name="'JG_'+t.name+'_'+d.name+'_value'" type="number" @blur="judgeValue">
					<input class="m_inputstandard" :name="'JG_'+t.name+'_'+d.name+'_standard'" type="number" @blur="judgeStandard">
				</view>
			</view>
			<!-- 标高数据输入 -->
			<view class="m_title"><text>标高</text></view>
			<view class="m_content" v-for="t in roomtype">
				<text class="m_type">{{t.type}}</text>
				<text class="m_standard">标准值</text>
				<view class="m_inputcontent" v-for="d in direction">
					<view class="m_inputtext"><text>{{d.direction}}</text></view>
					<input class="m_inputvalue"  :name="'BG_'+t.name+'_'+d.name+'_value'" type="number">
					<input class="m_inputstandard" :name="'BG_'+t.name+'_'+d.name+'_standard'" type="number">
				</view>
			</view>
			<view class="m_bottom" v-for="bay in baytype">
				<text class="m_title2">{{bay.type}}</text>
				<input class="m_bottominput" type="number" v-for="value in baynumber" :name="bay.name+value">
			</view>
			
			<button class="m_submit" form-type="submit" type="primary">提交</button>
		</form>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(){
			self=this;
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
					{direction:"左上",name:"lt",warm:"color:#f00"},
					{direction:"右上",name:"rt,",warm:"color:#f00"},
					{direction:"右下",name:"rb",warm:"color:#f00"},
					{direction:"左下",name:"lb",warm:"color:#f00"},
					{direction:"中间",name:"middle",warm:"color:#f00"}
					],
				measure:[],
				standard:[],
				red:false,
				baytype:[
					{type:"阴阳角",name:"yyj"},
					{type:"开间",name:"bay"},
					{type:"湿度",name:"humidity"}
					],
				baynumber:{
					1:'1',
					2:'2',
					3:'3',
					4:'4',
					5:'5',
					6:'6',
					7:'7',
					8:'8',
					9:'9',
					10:'10'
				}
					
					
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
