<template>
	<v-row>
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
		name: 'PopularView',
		components: {
			MovieCarousel,
		},

		data: () => ({}),

		mounted: function () {
			this.$store.dispatch('popularMovies');
		},

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
