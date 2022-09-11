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
	</v-main>
</template>

<script>
	import MovieCarousel from '@/components/MovieCarousel.vue';
	import MovieCard from '@/components/MovieCard.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'NowPlayingView',
		components: {
			MovieCarousel,
			MovieCard,
		},

		data: () => ({}),

		computed: {
			...mapGetters({
				movies: 'getMoviesInTheater',
			}),
		},

		methods: {
			handleCardClick: function (movieId) {
				this.$store.dispatch('movieDetails', movieId);
			},
			handleCarouselClick: function (movieId) {
				this.$store.dispatch('movieCasts', movieId);
			},
		},
	};
</script>
