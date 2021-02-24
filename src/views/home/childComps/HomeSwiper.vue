<template>
		<Swiper>
			<!-- 用v-for要绑定key，别问，问就是不知道但是写key就解决了问题 -->
			<SwiperItem v-for="item in banners" :key="item.acm">
				<a :href="item.link"><img :src="item.image" alt="" /></a>
			</SwiperItem>
		</Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js';
export default {
	name: 'HomeSwiper',
	props:{
		banners:{
			type:Array,
			dafault(){
				return[]
			}
		}
	},
	components:{
		Swiper,
		SwiperItem
	}
};
</script>

<style></style>
