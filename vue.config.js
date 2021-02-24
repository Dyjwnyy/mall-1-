module.exports={
	configureWebpack:{
		resolve: {
			//extensions: [],		//某些文件的后缀名就不用写了
			alias: {
				// '@':'src'这是默认的
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views',
				'network':'@/network'
			}
		}
	}
}
