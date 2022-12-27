<template>
	<v-app class="grey--text text--darken-2">
		<top-bar @search-event="handleSearch"></top-bar>
		<v-container>
			<transition name="scale" mode="out-in">
				<router-view></router-view>
			</transition>
		</v-container>
		<v-footer padless fixed>
			<bottom-navigation @nav-action="handlePageSwitch"></bottom-navigation>
		</v-footer>
		<!-- <movie-empty-state></movie-empty-state> -->
	</v-app>
</template>

<script>
	import BottomNavigation from '@/components/BottomNavigation.vue';
	import TopBar from '@/components/TopBar.vue';
	// import MovieEmptyState from './components/MovieEmptyState.vue';

	import MovieService from './service/MovieService';
	const movieService = new MovieService();

	export default {
		name: 'App',

		components: {
			// MovieEmptyState,
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
