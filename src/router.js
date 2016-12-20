module.exports = {
   routes: [
    {
        path: '/',
        component: require('./components/home.vue'),
        name:'主页'
    },
    {
        path: '/second',
        component: require('./components/second.vue'),
        name:'Vue介绍'
    },
    {
        path: '/third',
        component: require('./components/third.vue'),
        name:'Vue特点'
    },
    {
        path: '/fourth',
        component: require('./components/fourth.vue'),
        name:'电子时钟'
    },
    {
        path: '/fifth',
        component: require('./components/fifth'),
        name:'CNode主题'
    },
    {
        path: '/sixth',
        component: require('./components/sixth.vue'),
        name:'热映电影'
    },
    {
        path: '/gank',
        component: require('./components/gank.vue'),
        name:'干货福利'
    },{
        path:'/swiper',
        component:require('./components/swiper.vue'),
        name:'轮播风景'
    }
]
}