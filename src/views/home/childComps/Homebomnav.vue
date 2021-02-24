<template>
	<div class="bomnav">
		<div v-for="(item,index) in number"
		:class="{active:index===currentindex}"
		@click="itemclick(index)">
			<span >{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'bomnav',
		props:{
			 number:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentindex:0
			}
		},
		methods:{
			itemclick(index){
				this.currentindex=index
			}
		}
	}
</script>

<style>
	.bomnav{
		display: flex;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
	}
	.bomnav div{
		flex: 1;
		text-align: center;
	}
	.bomnav div span{
		padding: 5px;
	}
	.active span{
		border-bottom: 2px solid pink;
		color: pink;
	}
</style>
