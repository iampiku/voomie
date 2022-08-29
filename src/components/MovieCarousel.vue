<template>
	<v-card class="rounded-xl">
		<v-carousel
			cycle
			height="350"
			next-icon="mdi-menu-right"
			prev-icon="mdi-menu-left"
			show-arrows-on-hover
			hide-delimiters
		>
			<v-carousel-item
				v-for="(
					{
						title,
						backdrop_path,
						id,
						genres,
						release_date,
						vote_average,
					},
					index
				) in movies"
				:key="index"
			>
				<v-img
					class="rounded-xl"
					gradient="to top, rgba(100,115,201,.35), rgba(25,32,72,.7)"
					:src="`http://image.tmdb.org/t/p/original${backdrop_path}`"
					width="700"
				>
					<v-card
						ripple
						class="px-7 carousel-card"
						height="350"
						outlined
						color="transparent"
						@click="$emit('on-click', id)"
					>
						<v-card-title class="font-weight-bold white--text">{{
							title
						}}</v-card-title>

						<v-card-text class="card-text-color pb-0"
							>Released Date: {{ release_date }}
						</v-card-text>

						<div class="pl-3 pt-2">
							<v-chip
								color="red"
								class="ma-1 pb-0"
								text-color="white"
								pill
								small
								v-for="(genre, index) in genres"
								:key="index"
								>{{ genre }}</v-chip
							>

							<v-rating
								class="pb-0"
								empty-icon="mdi-star-face"
								:length="vote_average"
								background-color="orange lighten-3"
								color="orange"
							></v-rating>
						</div>
					</v-card>
				</v-img>
			</v-carousel-item>
		</v-carousel>
	</v-card>
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

<style scoped>
	.carousel-card {
		padding-top: 75px;
	}
	.card-text-color {
		font-weight: 600 !important;
		color: white !important;
	}
</style>
