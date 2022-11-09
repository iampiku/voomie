<template>
	<v-sheet class="mx-auto">
		<v-slide-group class="pa-4" show-arrows>
			<v-slide-item v-for="(movie, index) in movies.results" :key="index">
				<v-hover v-slot="{ hover }">
					<v-card
						class="ma-2 slider-card"
						height="180"
						width="120"
						:elevation="hover ? 6 : 0"
						@click="$emit('movie-clicked', movie.id)">
						<v-img
							:src="`http://image.tmdb.org/t/p/w200${movie.poster_path}`"></v-img>
					</v-card>
				</v-hover>
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

<style scoped>
	.slider-card {
		cursor: pointer;
	}
</style>
