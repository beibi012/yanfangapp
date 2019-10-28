<template>
	<view>
		<!-- css公用部分//图标列表样式 p100 -->
		<view class="pi_container">
			<navigator v-for="e in list" class="icon_container" :url="e.url">
				<image :style="load?'':'display: none;'" :src="e.src" mode="widthFix"></image>
				<text>{{e.name}}</text>
			</navigator>
			
		</view>
	</view>
</template>

<script>
	export default{
		onLoad() {
			
		},
		onReady() {
			this.load=true;
		},
		data(){
			return{
				load:false,
				headportrait:"",
				list:[
					{name:"个人信息",url:"newly/basic_information",src:"/static/Personalinformation@2x.png"},
					{name:"实测实量",url:"newly/measure",src:"/static/Measuredrealquantity@2x.png"},
					{name:"登记问题",url:"newly/take_notes",src:"/static/Registrationproblem@2x.png"},
					{name:"反馈",url:"newly/feedback",src:"/static/feedback@2x.png"}
				]
				
			}
		}
	}
</script>

<style>
</style>
