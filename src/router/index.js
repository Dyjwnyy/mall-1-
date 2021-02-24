import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Gwc = () => import('../views/gwc/Gwc')
const Fl = () => import('../views/fl/Fl')
const Profile = () => import('../views/profile/Profile')
Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/gwc',
		component: Gwc
	},
	{
		path: '/fl',
		component: Fl
	},
	{
		path: '/profile',
		component: Profile
	}
]

const router = new VueRouter({
	routes,
	mode: "history"
})

export default router
