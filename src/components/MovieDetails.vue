<template>
	<v-dialog
		v-model="showMovieDetails"
		:fullscreen="$vuetify.breakpoint.mobile"
	>
		<v-card>
			<v-card-text>{{ movieDetails }}</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'MovieDetails',

		data: () => ({
			showMovieDetails: false,
		}),

		props: {
			movieId: {
				type: Number,
				default: null,
			},
		},

		watch: {
			movieId: {
				handler(value) {
					if (value) {
						this.showMovieDetails = true;
					}
				},
				immediate: true,
			},
		},

		computed: {
			...mapGetters({
				movieDetails: 'getMovieDetails',
				movieCasts: 'getMovieCasts',
				movieRecommendation: 'getMovieRecommendation',
			}),
		},

		methods: {},
	};
</script>
