<template>
	<v-dialog v-model="showMovieDetails" fullscreen>
		<v-card class="elevation-0">
			<v-card-title
				>{{ movieDetails.original_title }}
				<v-spacer> </v-spacer>
				<v-icon @click.stop="showMovieDetails = false">mdi-close</v-icon>
			</v-card-title>
			<v-row>
				<v-col>
					<v-chip-group class="pl-3 pb-2">
						<v-chip
							tag
							small
							ripple
							class="ml-1"
							color="orange"
							text-color="white"
							v-for="({ name }, index) in movieDetails.genres"
							:key="index"
							>{{ name }}</v-chip
						>
					</v-chip-group>
					<v-card-text>
						<p class="font-weight-bold">{{ movieDetails.tagline }}</p>

						{{ movieDetails.overview }}</v-card-text
					>
					<v-card-text v-if="productionCompanyName.length">
						Production Companies: <span>{{ productionCompanyName }}</span>
					</v-card-text>
				</v-col>
				<v-col>
					<p>Movie poster over here!</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col> Movie Recommendation over here! </v-col>
			</v-row>
		</v-card>
	</v-dialog>
</template>

<script>
	import MovieService from '@/service/MovieService';
	const movieService = new MovieService();

	export default {
		name: 'MovieDetails',

		data: () => ({
			movieDetails: {},
			movieCastName: [],
		}),

		props: {
			movieId: {
				type: Number,
				default: null,
			},
			value: {
				type: Boolean,
				default: false,
			},
		},

		watch: {
			movieId: {
				handler() {
					this.fetchMovieDetails();
					if (this.movieDetails.id) {
						this.getMovieCastName();
					}
				},
			},
		},

		computed: {
			showMovieDetails: {
				get: function () {
					return this.value;
				},
				set: function (value) {
					this.$emit('input', value);
				},
			},

			productionCompanyName: function () {
				if (
					this.movieDetails &&
					this.movieDetails.production_companies &&
					this.movieDetails.production_companies.length
				) {
					const { production_companies } = this.movieDetails;
					const companyNames = [];
					if (production_companies.length) {
						production_companies.forEach(({ name }) => {
							companyNames.push(name);
						});
					}
					return companyNames.join(',');
				}
				return '';
			},
		},

		methods: {
			fetchMovieDetails: async function () {
				this.movieDetails = await movieService.getMovieDetails(this.movieId);
			},
			getMovieCastName: async function () {
				const cast = await movieService.getMovieCasts(this.movieId);
				cast.forEach(
					({ known_for_department, profile_path, original_name }) => {
						if (known_for_department === 'Acting')
							this.movieCastName.push({
								profilePic: profile_path,
								name: original_name,
							});
					}
				);
			},
		},
	};
</script>
