<template>
	<v-main>
		<div class="d-flex justify-center">
			<movie-carousel
				:movies="movies.results"
				@on-carousel-click="handleMovieClick"></movie-carousel>
		</div>

		<div class="d-flex flex-row flex-wrap justify-center">
			<movie-card
				v-for="(movie, index) in movies.results"
				:key="index"
				:movie="movie"
				@on-movie-click="handleMovieClick"></movie-card>
		</div>
		<MovieDetails v-model="showDialog" :movieId="movieId"></MovieDetails>
	</v-main>
</template>

<script>
	import MovieCarousel from '@/components/MovieCarousel.vue';
	import MovieCard from '@/components/MovieCard.vue';
	import MovieDetails from '@/components/MovieDetails.vue';

	import MovieService from '@/service/MovieService';
	const movieService = new MovieService();

	import MOVIE_CATEGORIES from '@/enums/MovieCategories';

	export default {
		name: 'MovieCategoriesView',

		components: {
			MovieCarousel,
			MovieCard,
			MovieDetails,
		},

		data: () => ({
			movies: [],
			movieId: 0,
			showDialog: false,
		}),

		watch: {
			$route: {
				handler(value) {
					this.fetchMovies(value.name);
				},
				immediate: true,
			},
		},

		methods: {
			fetchMovies: async function (name) {
				switch (name) {
					case 'popular':
						this.movies = await movieService.fetchMoviesByCategories(
							MOVIE_CATEGORIES.POPULAR_MOVIES
						);
						break;
					case 'nowplaying':
						this.movies = await movieService.fetchMoviesByCategories(
							MOVIE_CATEGORIES.NOW_IN_THEATER
						);
						break;
					case 'upcoming':
						this.movies = await movieService.fetchMoviesByCategories(
							MOVIE_CATEGORIES.UPCOMING_MOVIES
						);
						break;
				}
			},
			handleMovieClick: function (movieId) {
				this.movieId = movieId;
				this.showDialog = true;
			},
		},
	};
</script>
