<template>
	<v-sheet class="mx-auto">
		<v-slide-group class="pa-4" show-arrows>
			<v-slide-item v-for="(movie, index) in movies.results" :key="index">
				<v-card class="ma-2" height="180" width="120">
					<v-img
						:src="`http://image.tmdb.org/t/p/w200${movie.poster_path}`"></v-img>
				</v-card>
			</v-slide-item>
		</v-slide-group>
	</v-sheet>
</template>

<script>
	export default {
		name: 'movie-sliders',

		props: {
			movies: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style scoped></style>
