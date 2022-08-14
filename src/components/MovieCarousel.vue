<template>
	<v-carousel
		cycle
		height="350"
		next-icon="mdi-menu-right"
		prev-icon="mdi-menu-left"
		show-arrows-on-hover
		hide-delimiters
		hide-delimiter-background
	>
		<v-carousel-item
			v-for="(movie, index) in movies"
			:key="index"
			@click="$emit('onClick', movie.id)"
		>
			<v-card
				ripple
				height="350"
				:img="`http://image.tmdb.org/t/p/original${movie.backdrop_path}`"
			>
				<v-card-title class="font-weight-bold white--text">{{
					movie.title
				}}</v-card-title>
				<v-card-text class="font-weight-regular text--primary">{{
					movie.overview
				}}</v-card-text>
			</v-card>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
	export default {
		name: 'movie-carousel',
		data: () => ({}),

		props: {
			movies: {
				type: [],
				required: true,
			},
		},
	};
</script>
