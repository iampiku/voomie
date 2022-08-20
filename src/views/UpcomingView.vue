<template>
	<v-row class="d-flex justify-center pt-6">
		<movie-carousel
			:movies="movies"
			@on-click="handleCarouselClick"
		></movie-carousel>
	</v-row>
</template>

<script>
	import MovieCarousel from '@/components/MovieCarousel.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'UpcomingView',
		components: {
			MovieCarousel,
		},

		data: () => ({}),

		computed: {
			...mapGetters({
				movies: 'getUpComingMovies',
			}),
		},

		methods: {
			handleCarouselClick: function (movieId) {
				this.$store.dispatch('movieCasts', movieId);
			},
		},
	};
</script>
