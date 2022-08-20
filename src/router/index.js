import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/popular',
		name: 'popular',
		component: () => import('@/views/PopularView.vue'),
	},
	{
		path: '/nowplaying',
		name: 'nowplaying',
		component: () => import('@/views/NowPlayingView.vue'),
	},
	{
		path: '/upcoming',
		name: 'upcoming',
		component: () => import('@/views/UpcomingView.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/AboutView.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
