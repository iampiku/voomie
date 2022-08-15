<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-main>
			<v-container d-flex justify-center>
				<movie-carousel
					:movies="movies"
					@on-click="handleSelect"
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
			genres: [],
		}),

		beforeCreate() {
			this.$store.dispatch('popularMovies');
			this.$store.dispatch('movieGenres');
		},

		computed: {
			...mapGetters({
				popularMovies: 'getPopularMovies',
				movieGenres: 'getMovieGenres',
			}),
		},

		watch: {
			popularMovies: {
				handler(movies) {
					movies.forEach((movie) => {
						const genreNameArr = [];
						movie.genre_ids?.forEach((e) => {
							this.movieGenres.forEach(({ id, name }) => {
								if (id === e) genreNameArr.push(name);
							});
						});
						movie['genres'] = genreNameArr;
						delete movie.genre_ids;
					});
					this.movies = movies;
				},
				immediate: true,
				deep: true,
			},
		},

		methods: {
			handleSelect(movie) {
				this.$store.dispatch('movieCasts', movie);
				console.log(movie);
			},

			handleSearch: function (searchItem) {
				this.$store.dispatch('searchedMovies', searchItem);
				console.log(searchItem);
			},

			handlePageSwitch: function (navItem) {
				console.log(navItem);
			},
		},
	};
</script>
