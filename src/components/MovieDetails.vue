<template>
	<v-dialog> </v-dialog>
</template>

<script>
	export default {
		name: 'MovieDetails',

		data: () => ({}),

		props: {
			movieId: {
				type: Number,
				default: 0,
			},

			showMovieDetails: {
				type: Boolean,
				default: false,
			},
		},

		methods: {},
	};
</script>
