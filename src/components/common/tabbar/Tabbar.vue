<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'tabbar'
};
</script>

<style>
#tabbar {
	height: 49px;
	display: flex; /* 弹性盒子 */
	background-color: #f6f6f6;
	position: fixed; /* 调整位置在最下面 */
	left: 0; /* 确保占据整个屏幕的宽，最好写 */
	right: 0;
	bottom: 0;
	box-shadow: 0px -2px 1px rgba(188, 188, 188, 0.2); /* 用于美观的过渡阴影 */
}
</style>
