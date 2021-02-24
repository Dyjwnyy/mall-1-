<template>
	<div id="Home">
		<navbar class="home-nav">
			<div slot="center">购物街</div>
		</navbar>
		<HomeSwiper :banners="banners"/>
		<RecommendView :recommends="recommends"/>
		<Homepopular/>
		<Homebomnav :number="['精选','精品','忘了']" class="hellowbomnav" ></Homebomnav>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li>12</li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li>19</li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li>26</li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
			<li>32</li>
			<li>33</li>
			<li>34</li>
			<li>35</li>
			<li>36</li>
			<li>37</li>
			<li>38</li>
			<li>39</li>
			<li>40</li>
			<li>41</li>
			<li>42</li>
			<li>43</li>
			<li>44</li>
			<li>45</li>
			<li>46</li>
			<li>47</li>
			<li>48</li>
			<li>49</li>
			<li>50</li>
			<li>51</li>
			<li>52</li>
			<li>53</li>
			<li>54</li>
			<li>55</li>
			<li>56</li>
			<li>57</li>
			<li>58</li>
			<li>59</li>
			<li>60</li>
		</ul>
	</div>
</template>

<script>
	//公共
	import  navbar from 'components/common/navbar/navbar.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import Homepopular from './childComps/Homepopular.vue'
	//
	import Homebomnav from './childComps/Homebomnav.vue'
	//数据
	import {getHomeMultidata} from 'network/home.js'
	export default{
		name:'Home',
		
		components:{
			navbar,
			HomeSwiper,
			RecommendView,
			Homepopular,
			Homebomnav
		},
		data(){
			return{
				// result:null
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'news':{page:0,list:[]},
					'sell':{page:0,list:[]}
				}
			}
		},
		
		//vue生命周期函数，当这个组件被创建时执行
		created(){
			//这东西内部返回的Promise，所以可以调用then
			
			//函数调用 -> 压入函数栈（保存函数调用过程中的所有变量）
			//函数调用结束 -> 弹出函数栈（释放函数所有的变量）
			getHomeMultidata().then(res =>{
				console.log(res);
				// this.result = res;
				this.banners = res.data.banner.list;
				//这里可以用控制台的vue插件来看数据
				this.recommends = res.data.recommend.list;
				//这样就不会消失了，为什么不会消失，涉及到内存回收，垃圾回收机制：会在没有引用指向他的时候回收一个对象，其实我tm也不知道啥意思，c
				//data里面的那个result不会被回收，因为这个变量属于组件，是被永远引用的，而现在用这个变量引用这个33行res对象，可见这个变量已经指向res这个对象了，当指向他的时候变量就把他的东西保存下来了，所以不会被回收
				//知道就行不用明白，这也不是完全回收，回收了变量名字，对象没有被回收
			})
		}
	}
</script>

<style>
	#Home{
		padding-top: 44px;
	}
	.home-nav{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.hellowbomnav{
		position: sticky;
		top: 44px;
	}
	
</style>
