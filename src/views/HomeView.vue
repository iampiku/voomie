<template>
	<v-container class="mt-16">
		<v-chip
			style="cursor: pointer"
			ripple
			color="red"
			class="px-10 ml-16 white--text"
			@click="handleChipClick('popular')"
			>Popular Movies <v-icon right>mdi-crown</v-icon></v-chip
		>
		<movie-sliders
			:movies="popularMovies"
			@movie-clicked="handleMovieClick"></movie-sliders>
		<v-chip
			style="cursor: pointer"
			ripple
			color="red"
			class="px-10 ml-16 white--text"
			@click="handleChipClick('nowplaying')"
			>Movies in Theater <v-icon right>mdi-movie-play</v-icon></v-chip
		>
		<movie-sliders
			:movies="upComingMovies"
			@movie-clicked="handleMovieClick"></movie-sliders>
		<v-chip
			style="cursor: pointer"
			ripple
			color="red"
			class="px-10 ml-16 white--text"
			@click="handleChipClick('upcoming')"
			>Upcoming Movies <v-icon right>mdi-motion-play</v-icon></v-chip
		>
		<movie-sliders
			:movies="topRatedMovies"
			@movie-clicked="handleMovieClick"></movie-sliders>

		<!-- Movie Details -->
		<movie-details
			v-model="showMovieDetails"
			:movie-id="movieId"></movie-details>
	</v-container>
</template>

<script>
	import MovieSliders from '@/components/MovieSliders.vue';
	import MovieDetails from '@/components/MovieDetails.vue';

	import MovieService from '@/service/MovieService';
	const movieService = new MovieService();

	import MOVIE_CATEGORIES from '@/enums/MovieCategories';
	export default {
		name: 'HomeView',

		components: {
			MovieSliders,
			MovieDetails,
		},

		created: function () {
			this.fetchMovies();
		},

		data: () => ({
			popularMovies: {},
			upComingMovies: {},
			movieInTheaters: {},
			topRatedMovies: {},
			popularActors: {},
			showMovieDetails: false,
			movieId: 0,
		}),

		methods: {
			/**
			 * Concurrent API calls for Home Page view.
			 */
			fetchMovies: async function () {
				const [movieInTheaters, popularMovies, topRatedMovies, upComingMovies] =
					await Promise.all([
						this.fetchMoviesInTheater(),
						this.fetchPopularMovies(),
						this.fetchTopRatedMovies(),
						this.fetchUpcomingMovies(),
					]);
				this.popularMovies = popularMovies;
				this.upComingMovies = upComingMovies;
				this.movieInTheaters = movieInTheaters;
				this.topRatedMovies = topRatedMovies;
			},
			fetchPopularMovies: function () {
				return movieService.fetchMoviesByCategories(
					MOVIE_CATEGORIES.POPULAR_MOVIES
				);
			},
			fetchMoviesInTheater: function () {
				return movieService.fetchMoviesByCategories(
					MOVIE_CATEGORIES.NOW_IN_THEATER
				);
			},
			fetchUpcomingMovies: function () {
				return movieService.fetchMoviesByCategories(
					MOVIE_CATEGORIES.UPCOMING_MOVIES
				);
			},
			fetchTopRatedMovies: function () {
				return movieService.fetchMoviesByCategories(
					MOVIE_CATEGORIES.TOP_RATED_MOVIES
				);
			},
			handleMovieClick: function (movieId) {
				this.movieId = movieId;
				this.showMovieDetails = true;
			},
			handleChipClick: function (movieCategories) {
				this.$router.push(movieCategories);
			},
		},
	};
</script>

<style scoped></style>
