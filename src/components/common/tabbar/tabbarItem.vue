<template>
	<div class="tabbar-item" @click="itemClick()">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<!-- v-bind动态绑定样式 -->
		<div :style="activeStyle"><slot name="item-text"></slot></div>
		
	</div>
</template>

<script>
	export default{
		name:'tabbaritem',
		props:{
			activeColor:{
				type:String,
				default:'red'//默认
			},
			path:String,
			//因为这里是字符串类型的，所以在App.vue向这里传入时不用加:冒号,需要传变量时才加:冒号
		},
		data(){
			//别忘记写return
			return{
				// isActive:false,
			}
		},
		methods:{
			itemClick(){
				console.log(111)
				this.$router.replace(this.path)
			}
		},
		computed:{
			isActive(){
				//home ->item1(/home)=true
				//home ->item1(/gwc)=false
				//home ->item1(/fl)=false
				//home ->item1(/profile)=false
				//route是活跃的那个路由
				return this.$route.path.indexOf(this.path) !==-1//等于-1是没有找到，不等于-1就是找到了
				//活跃路由的路径和现在路由的路径相等，就返回true
			},
			//v-bind动态绑定样式，并把样式抽到计算属性里
			activeStyle(){
				return this.isActive ? {color: this.activeColor}:{}
			}
		}
	}
</script>

<style>
	.tabbar-item {
		flex: 1; /* 弹性盒子 */
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tabbar-item img{
		width: 24px;
		height: 24px;
		margin-top: 2px;
		margin-bottom: 2px;
		vertical-align: middle; /* 去掉图片下面自带的3px空间*/
	}
</style>
