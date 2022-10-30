<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-container fluid>
			<router-view></router-view>
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
						this.$router.push('/home');
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

<style scoped></style>
