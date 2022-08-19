import Vue from 'vue';
import VueRouter from 'vue-router';
import PopularView from '../views/PopularView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'popular',
		component: PopularView,
	},
	{
		path: '/toprated',
		name: 'toprated',
		component: () => import('@/views/TopRatedView.vue'),
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
