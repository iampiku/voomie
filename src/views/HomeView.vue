<template>
	<v-container class="mt-7">
		<movie-sliders :movies="popularMovies"></movie-sliders>
		<movie-sliders :movies="upComingMovies"></movie-sliders>
		<movie-sliders :movies="topRatedMovies"></movie-sliders>
	</v-container>
</template>

<script>
	import MovieSliders from '@/components/MovieSliders.vue';
	import MovieService from '@/service/MovieService';
	const movieService = new MovieService();

	import MOVIE_CATEGORIES from '@/enums/MovieCategories';
	export default {
		name: 'HomeView',

		components: {
			MovieSliders,
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
		}),

		methods: {
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
		},
	};
</script>

<style scoped></style>
