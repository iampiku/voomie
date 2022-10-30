import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
	},
	{
		path: '/popular',
		name: 'popular',
		component: () => import('@/views/MovieCategoriesView.vue'),
	},
	{
		path: '/nowplaying',
		name: 'nowplaying',
		component: () => import('@/views/MovieCategoriesView.vue'),
	},
	{
		path: '/upcoming',
		name: 'upcoming',
		component: () => import('@/views/MovieCategoriesView.vue'),
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
