<template>
	<v-app bg="gray">
		<top-bar @search-event="handleSearch"></top-bar>
		<v-container>
			<transition name="scale" mode="out-in">
				<router-view></router-view>
			</transition>
		</v-container>
		<v-footer padless fixed>
			<bottom-navigation @nav-action="handlePageSwitch"></bottom-navigation>
		</v-footer>
	</v-app>
</template>

<script>
	import BottomNavigation from '@/components/BottomNavigation.vue';
	import TopBar from '@/components/TopBar.vue';

	import MovieService from './service/MovieService';
	const movieService = new MovieService();

	export default {
		name: 'App',

		components: {
			BottomNavigation,
			TopBar,
		},

		data: () => ({
			movies: [],
		}),

		methods: {
			handleSearch: function (searchItem) {
				this.movies = movieService.getSearchResults(searchItem);
			},
			handlePageSwitch: function (navItem) {
				switch (navItem) {
					case 'home':
						this.$router.push('/');
						break;
					case 'popular':
						this.$router.push('/popular');
						break;
					case 'upcoming':
						this.$router.push('/upcoming');
						break;
					case 'nowplaying':
						this.$router.push('/nowplaying');
						break;
					case 'about':
						this.$router.push('/about');
						break;
				}
			},
		},
	};
</script>

<style scoped>
	.scale-enter-active,
	.scale-leave-active {
		transition: all 0.5s ease;
	}
	.scale-enter-from,
	.scale-leave-to {
		opacity: 0;
		transform: scale(0.9);
	}
</style>
