<template>
	<v-card class="rounded-xl" :width="carouselWidth">
		<v-carousel
			cycle
			:height="carouselHeight"
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
				>
					<v-card
						ripple
						class="mx-6 carousel-card"
						outlined
						color="transparent"
						@click="$emit('on-carousel-click', id)"
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
		computed: {
			carouselHeight: function () {
				switch (this.$vuetify.breakpoint.name) {
					case 'xs':
						return 210;
					case 'sm':
						return 250;
					case 'md':
						return 280;
					case 'lg':
						return 380;
					case 'xl':
						return 380;
					default:
						return 600;
				}
			},
			carouselWidth: function () {
				switch (this.$vuetify.breakpoint.name) {
					case 'xs':
						return 390;
					case 'sm':
						return 450;
					case 'md':
						return 630;
					case 'lg':
						return 960;
					case 'xl':
						return 980;
					default:
						return 0;
				}
			},
		},
	};
</script>

<style scoped>
	.carousel-card {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.card-text-color {
		font-weight: 600 !important;
		color: white !important;
	}
</style>
