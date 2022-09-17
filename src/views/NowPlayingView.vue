<template>
	<v-main>
		<div class="d-flex justify-center">
			<movie-carousel
				:movies="movies"
				@on-carousel-click="handleCarouselClick"
			></movie-carousel>
		</div>

		<div class="d-flex flex-row flex-wrap justify-center">
			<movie-card
				v-for="(movie, index) in movies"
				:key="index"
				:movie="movie"
				@on-movie-click="handleCardClick"
			></movie-card>
		</div>
		<MovieDetails :movieId="movieId"></MovieDetails>
	</v-main>
</template>

<script>
	import MovieCarousel from '@/components/MovieCarousel.vue';
	import MovieCard from '@/components/MovieCard.vue';
	import MovieDetails from '@/components/MovieDetails.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'NowPlayingView',
		components: {
			MovieCarousel,
			MovieCard,
			MovieDetails,
		},

		data: () => ({
			movieId: 0,
		}),

		mounted: function () {
			this.$store.dispatch('moviesInTheater');
		},

		computed: {
			...mapGetters({
				movies: 'getMoviesInTheater',
			}),
		},

		methods: {
			handleCardClick: function (movieId) {
				this.movieId = movieId;
				this.$store.dispatch('movieCasts', movieId);
				this.$store.dispatch('movieDetails', movieId);
				this.$store.dispatch('movieRecommendation', movieId);
			},
			handleCarouselClick: function (movieId) {
				this.movieId = movieId;
				this.$store.dispatch('movieCasts', movieId);
				this.$store.dispatch('movieDetails', movieId);
				this.$store.dispatch('movieRecommendation', movieId);
			},
		},
	};
</script>
