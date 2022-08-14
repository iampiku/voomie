<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-main>
			<v-container>
				<movie-carousel
					:movies="movies"
					@onClick="handleSelect"
				></movie-carousel>
			</v-container>
		</v-main>
		<v-footer padless fixed>
			<bottom-navigation
				@nav-action="handlePageSwitch"
			></bottom-navigation>
		</v-footer>
	</v-app>
</template>

<script>
	import BottomNavigation from '@/components/BottomNavigation.vue';
	import TopBar from '@/components/TopBar.vue';
	import MovieCarousel from '@/components/MovieCarousel.vue';

	import { mapGetters } from 'vuex';

	export default {
		name: 'App',

		components: {
			BottomNavigation,
			TopBar,
			MovieCarousel,
		},

		data: () => ({
			movies: [],
		}),

		beforeCreate() {
			this.$store.dispatch('popularMovies');
			this.$store.dispatch('movieGenres');
		},

		mounted() {
			this.fetchMoviesWithGenres();
		},

		computed: {
			...mapGetters({
				popularMovies: 'getPopularMovies',
				movieGenres: 'getMovieGenres',
			}),
		},

		methods: {
			fetchMoviesWithGenres: function () {
				this.movies = this.popularMovies;
				this.movies.forEach((movie) => {
					const genreNameArr = [];
					movie.genre_ids.forEach((e) => {
						this.movieGenres.forEach(({ id, name }) => {
							if (id === e) genreNameArr.push(name);
						});
					});
					movie['genres'] = genreNameArr;
					delete movie.genre_ids;
				});
			},

			handleSelect(movie) {
				console.log(movie);
			},

			handleSearch: function (searchItem) {
				console.log(searchItem);
			},

			handlePageSwitch: function (navItem) {
				console.log(navItem);
			},
		},
	};
</script>
