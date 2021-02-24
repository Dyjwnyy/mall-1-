<template>
	<tabbar>
		<tabbaritem path="/home" activeColor="orange">
			<img slot="item-icon" src="~assets/img/tabbar/home1.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/home2.png" alt="">
			<div slot="item-text">首页</div>
		</tabbaritem>
		<tabbaritem path="/gwc">
			<img slot="item-icon" src="~assets/img/tabbar/gwc1.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/gwc2.png" alt="">
			<div slot="item-text">购物车</div>
		</tabbaritem>
		<tabbaritem path="/fl">
			<img slot="item-icon" src="~assets/img/tabbar/fl1.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/fl2.png" alt="">
			<div slot="item-text">分类</div>
		</tabbaritem>
		<tabbaritem path="/profile">
			<img slot="item-icon" src="~assets/img/tabbar/profile1.png" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/profile2.png" alt="">
			<div slot="item-text">我的</div>
		</tabbaritem>
	</tabbar>
</template>

<script>
	import tabbar from 'components/common/tabbar/Tabbar.vue';
	import tabbaritem from 'components/common/tabbar/tabbarItem.vue'
	export default{
		name:'maintabbar',
		components:{
			tabbar,
			tabbaritem
		}
	}
</script>

<style>
</style>
