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
		name: 'PopularView',
		components: {
			MovieCarousel,
			MovieCard,
		},

		mounted: function () {
			this.$store.dispatch('popularMovies');
		},

		data: () => ({}),

		computed: {
			...mapGetters({
				movies: 'getPopularMovies',
			}),
		},

		methods: {
			handleCarouselClick: function (movieId) {
				this.$store.dispatch('movieCasts', movieId);
			},
			handleCardClick: function (movieId) {
				this.$store.dispatch('movieDetails', movieId);
			},
		},
	};
</script>
