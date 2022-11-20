<template>
	<v-sheet class="mx-auto">
		<v-slide-group class="pa-4" show-arrows>
			<v-slide-item v-for="(movie, index) in movies.results" :key="index">
				<MovieCard
					:movie="movie"
					@on-movie-click="handleMovieClick"></MovieCard>
			</v-slide-item>
		</v-slide-group>
	</v-sheet>
</template>

<script>
	import MovieCard from './MovieCard.vue';

	export default {
		name: 'movie-sliders',

		components: {
			MovieCard,
		},

		props: {
			movies: {
				type: Object,
				required: true,
			},
		},

		methods: {
			handleMovieClick: function (movieId) {
				console.log(movieId);
			},
		},
	};
</script>

<style scoped></style>
