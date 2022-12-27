<template>
	<v-container class="mt-12">
		<div class="d-flex justify-center">
			<movie-carousel
				:movies="movies.results"
				@on-carousel-click="handleMovieClick">
			</movie-carousel>
		</div>
		<v-row class="py-6 d-flex justify-center">
			<v-chip ripple class="px-12 white--text" color="red"
				>{{ movieCategoryName }}
				<v-icon right>{{ getChipIcon }}</v-icon></v-chip
			>
		</v-row>
		<v-row class="d-flex flex-row flex-wrap justify-center dense">
			<movie-card
				v-for="(movie, index) in movies.results"
				:key="index"
				:movie="movie"
				@on-movie-click="handleMovieClick"></movie-card>
			<div
				v-if="movies && movies.results && movies.results.length"
				v-observe-visibility="handleScrollBottom"></div>
		</v-row>
		<MovieDetails v-model="showDialog" :movieId="movieId"></MovieDetails>
	</v-container>
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
			page: 1,
			movies: {},
			movieId: 0,
			movieCasts: [],
			showDialog: false,
			movieCategoryName: '',
		}),

		computed: {
			getChipIcon: function () {
				switch (this.movieCategoryName) {
					case 'Popular Movies':
						return 'mdi-crown';
					case 'Movies in Theater':
						return 'mdi-movie-play';
					case 'Upcoming Movies':
						return 'mdi-motion-play';
				}
				return 'mdi-movie';
			},
		},

		watch: {
			$route: {
				handler({ name }) {
					this.fetchMovies(name);
				},
				immediate: true,
			},
		},

		methods: {
			handleScrollBottom: function (isVisible) {
				if (!isVisible) return;
				else this.fetchMoreMovies(this.$route.name);
			},
			fetchMoreMovies: async function (currentRoute) {
				++this.page;
				let data = null;
				if (currentRoute === 'popular') {
					data = await movieService.fetchMoviesByCategories(
						MOVIE_CATEGORIES.POPULAR_MOVIES,
						this.page
					);
				} else if (currentRoute === 'upcoming') {
					data = await movieService.fetchMoviesByCategories(
						MOVIE_CATEGORIES.UPCOMING_MOVIES,
						this.page
					);
				} else if (currentRoute === 'nowplaying') {
					data = await movieService.fetchMoviesByCategories(
						MOVIE_CATEGORIES.NOW_IN_THEATER,
						this.page
					);
				}
				this.movies?.results.push(...data.results);
			},
			fetchMovies: async function (name) {
				switch (name) {
					case 'popular':
						this.movies = await movieService.fetchMoviesByCategories(
							MOVIE_CATEGORIES.POPULAR_MOVIES
						);
						this.movieCategoryName = 'Popular Movies';
						break;
					case 'nowplaying':
						this.movies = await movieService.fetchMoviesByCategories(
							MOVIE_CATEGORIES.NOW_IN_THEATER
						);
						this.movieCategoryName = 'Movies in Theaters';
						break;
					case 'upcoming':
						this.movies = await movieService.fetchMoviesByCategories(
							MOVIE_CATEGORIES.UPCOMING_MOVIES
						);
						this.movieCategoryName = 'Upcoming Movies';
						break;
					default:
						this.movieCategoryName = '404';
				}
			},
			handleMovieClick: function (movieID) {
				this.movieId = movieID;
				this.showDialog = true;
			},
		},
	};
</script>

<style scoped></style>
