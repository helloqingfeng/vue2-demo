import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
// import routes from './router'


Vue.config.debug = true;

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter(require('./router'))

// 设置afterEach钩子函数
router.afterEach((to,from,next)=>{
	document.title=to.name;
})
/* eslint-disable no-new */
new Vue({
	router:router,
	render:h => h(App)
}).$mount('#app')
