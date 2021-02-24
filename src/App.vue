<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view/>
  </div>
</template>
<script>
	import maintabbar from 'components/content/maintabbar/maintabbar.vue'
	export default {
		name:'app',
		components:{
			maintabbar
		}
	}
</script>
<style>
	@import "./assets/css/base.css"
</style>
