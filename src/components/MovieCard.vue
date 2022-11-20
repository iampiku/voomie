<template>
	<v-hover v-slot="{ hover }">
		<v-card
			ripple
			outlined
			:elevation="hover ? 9 : 0"
			:width="cardWidth"
			class="rounded-xl ma-2 pb-0"
			style="cursor: pointer"
			@click.stop="$emit('on-movie-click', movie.id)">
			<v-img
				class="rounded-xl ma-2 pa-0"
				:gradient="
					hover ? null : 'to top, rgba(100,115,201,.20), rgba(25,32,72,.7)'
				"
				:src="`http://image.tmdb.org/t/p/original${movie.poster_path}`">
			</v-img>
			<v-card-title class="title-name" spacing="-0.3">
				{{ movie.title }}
			</v-card-title>
			<v-card-text
				class="pb-0 text-weight-bold"
				:class="
					$vuetify.breakpoint.md ||
					$vuetify.breakpoint.sm ||
					$vuetify.breakpoint.xs
						? ''
						: 'd-flex justify-space-between'
				">
				<p><v-icon color="red">mdi-star</v-icon> {{ movie.vote_average }}/10</p>
				<p>
					<v-icon color="red">mdi-calendar-today</v-icon>
					{{ movie.release_date }}
				</p>
			</v-card-text>
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
						return 260;
				}
			},
		},
	};
</script>

<style scoped>
	.title-name {
		font-size: 0.98rem;
		overflow-wrap: normal;
	}
</style>
