<template>
	<v-hover v-slot="{ hover }">
		<v-card
			ripple
			outlined
			:elevation="hover ? 9 : 0"
			:width="cardWidth"
			class="rounded-xl ma-2"
			style="cursor: pointer"
			@click="$emit('on-movie-click', movie.id)">
			<v-img
				class="rounded-xl ma-1"
				gradient="to top, rgba(100,115,201,.20), rgba(25,32,72,.7)"
				:src="`http://image.tmdb.org/t/p/original${movie.poster_path}`">
				<div class="card-text">
					<v-card-title class="pb-0 white--text title-name" spacing="-0.3">
						{{ movie.title }}
					</v-card-title>
					<v-card-text class="pb-0 white--text text-weight-light">
						<p>{{ movie.vote_average }}/10</p>
					</v-card-text>
				</div>
			</v-img>
		</v-card>
	</v-hover>
</template>

<script>
	export default {
		name: 'movie-card',

		data: () => ({}),

		props: {
			movie: {
				type: Object,
				required: true,
			},
		},

		computed: {
			cardWidth: function () {
				switch (this.$vuetify.breakpoint.name) {
					case 'xs':
						return 165;
					case 'md':
						return 175;
					default:
						return 180;
				}
			},
		},
	};
</script>

<style scoped>
	.title-name {
		font-size: medium;
	}
	.card-text {
		display: flex;
		flex-direction: column;
	}
</style>
