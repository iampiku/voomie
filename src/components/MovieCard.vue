<template>
	<v-card
		ripple
		outlined
		elevation="4"
		width="220"
		height="350"
		class="rounded-xl"
		style="cursor: pointer"
		@click="$emit('on-movie-click', movie.id)"
	>
		<v-img
			width="270"
			class="rounded-xl"
			gradient="to top, rgba(100,115,201,.12), rgba(25,32,72,.7)"
			:src="`http://image.tmdb.org/t/p/original${movie.poster_path}`"
		>
			<v-card-title class="pb-0 white--text title-name" spacing="-0.1">
				{{ movie.title }}
			</v-card-title>
			<v-spacer></v-spacer>
			<v-card-text class="pb-0 card-text-color"
				>{{ movie.release_date }} {{ movie.vote_average }}</v-card-text
			>
		</v-img>
	</v-card>
</template>

<script>
	export default {
		name: 'movie-card',
		data: () => ({
			movie: {
				adult: false,
				backdrop_path: '/vvObT0eIWGlArLQx3K5wZ0uT812.jpg',
				genre_ids: [28, 12, 14],
				id: 616037,
				original_language: 'en',
				original_title: 'Thor: Love and Thunder',
				overview:
					'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
				popularity: 7036.373,
				poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
				release_date: '2022-07-06',
				title: 'Thor: Love and Thunder',
				video: false,
				vote_average: 6.8,
				vote_count: 2067,
			},
		}),

		// props: {
		// 	movies: {
		// 		type: {},
		// 		required: true,
		// 	},
		// },
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
