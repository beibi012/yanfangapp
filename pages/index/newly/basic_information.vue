<template>
	<view class="bi_container">
		<form @submit="submitInfo">
			<view class="bi_c">
				<text class="bi_text">委托人/单位</text>
				<input class="bi_input" name="bi_client" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">联系方式</text>
				<input class="bi_input" name="bi_cellnumber" type="number" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">检查项目名称</text>
				<input class="bi_input" name="bi_project" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">单元房号</text>
				<input class="bi_input" name="bi_roomnumber" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">套内建筑面积</text>
				<input class="bi_input" name="bi_floorspace" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">装修程度</text>
				<picker name='bi_property_type' :range="array" :value="index" @change="changeProprtytype" >
				<view class="bi_picker">{{array[index]}}
				<view class="arrow">
					<view class="arrowbottom"></view>
					</view>
					</view>
				</picker>
			</view>
			<view class="bi_c">
				<text class="bi_text">房屋类型</text>
				<input class="bi_input" name="bi_housetype" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">检查期是否通电</text>
				<radio-group name="bi_radio_electric" class="radio">
						<view class="radio_option"><radio value="yes" /><text>是</text></view>
						<view class="radio_option"><radio value="no" /><text>否</text></view>
				</radio-group>
			</view>
			<view class="bi_c">
				<text class="bi_text">检查期是否通水</text>
				<radio-group name="bi_radio_water" class="radio">
						<view class="radio_option"><radio value="yes" /><text>是</text></view>
						<view class="radio_option"><radio value="no" /><text>否</text></view>
				</radio-group>
			</view>
			<view class="bi_c">
				<text class="bi_text">现场检查人员</text>
				<input class="bi_input" name="bi_inspectors" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">报告编制人</text>
				<input class="bi_input" name="bi_reporter" type="text" value="" >
			</view>
			<view class="bi_c">
				<text class="bi_text">实地验房时间</text>
				<input class="bi_input" name="bi_time" type="text" value="" >
			</view>
			
			<button form-type="submit">Submit</button>
		</form>
	</view>
</template>

<script>
	var self; 
	export default{
		data(){
			return{
				array:['精装房','装修房','毛坯房'],
				index:0
			}
		},
		onLoad(){
			self=this;
		},
		methods:{
			changeProprtytype:(e)=>{
				self.index=e.detail.value;
			},
			submitInfo:(e)=>{
				e.detail.value.bi_property_type=self.array[self.index]
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
