<template>
	<div class="Recommend">
		<div v-for="item in recommends"  class="imgbox">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props: {
		recommends: {
			type: Array,
			default() {
				return []
			}
		}
	}
};
</script>

<style>
.Recommend {
	display: flex;
	width: 100%;
	text-align: center;
	padding: 10px 0 20px;
	border-bottom: 8px solid #eee;
}
a{
	color: #000;
	text-decoration: none;
}
.imgbox{
	flex: 1;
}
.imgbox img{
	width: 80px;
	height: 80px;
	margin-bottom: 10px;
}
</style>
