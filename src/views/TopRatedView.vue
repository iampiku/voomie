<template>
	<div class="d-flex justify-center pt-2">
		<movie-carousel
			:movies="movies"
			@on-click="handleCarouselClick"
		></movie-carousel>
	</div>
</template>

<script>
	import MovieCarousel from '@/components/MovieCarousel.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'TopRatedView',
		components: {
			MovieCarousel,
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
		},
	};
</script>
