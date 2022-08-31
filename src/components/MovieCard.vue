<template>
	<v-card
		ripple
		outlined
		elevation="6"
		width="200"
		height="300"
		class="rounded-xl ma-2"
		style="cursor: pointer"
		@click="$emit('on-movie-click', movie.id)"
	>
		<v-img
			class="rounded-xl"
			gradient="to top, rgba(100,115,201,.20), rgba(25,32,72,.7)"
			:src="`http://image.tmdb.org/t/p/original${movie.poster_path}`"
		>
			<v-card-title class="pb-0 white--text title-name" spacing="-0.1">
				{{ movie.title }}
			</v-card-title>
			<v-spacer></v-spacer>
			<v-card-text class="pb-0 card-text-color"
				>{{ movie.release_date }} -
				{{ movie.vote_average }}</v-card-text
			>
		</v-img>
	</v-card>
</template>

<script>
	export default {
		name: 'movie-card',
		data: () => ({}),

		props: {
			movie: {
				type: {},
				required: true,
			},
		},
		methods: {},
	};
</script>

<style scoped>
	.title-name {
		font-size: medium;
	}
	.card-text-color {
		font-weight: 400 !important;
		color: white !important;
	}
</style>
