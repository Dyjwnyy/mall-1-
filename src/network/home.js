import {request} from "./request.js"

export function getHomeMultidata(){
	return request ({
		url:'/home/multidata'
	})
}
//函数调用 -> 压入函数栈（保存函数调用过程中的所有变量）
//函数调用结束 -> 弹出函数栈（释放函数所有的变量）
//就是Home.vue中的create函数
// function test(){
// 	const names=['111','aaa']
// }
// text()
