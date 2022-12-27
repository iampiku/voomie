<template>
	<v-dialog v-model="showMovieDetails" fullscreen>
		<v-card>
			<v-card-text>
				<v-card-title>
					<v-spacer></v-spacer>
					<v-icon @click.stop="showMovieDetails = false">mdi-close</v-icon>
				</v-card-title>
				<v-row class="justify-center side-padding">
					<v-col class="align-center">
						<v-img
							class="rounded-xl"
							width="280"
							:src="`http://image.tmdb.org/t/p/original${movieDetails.poster_path}`"></v-img>
					</v-col>
					<v-col class="align-center">
						<p class="text-h5 font-weight-medium">
							<a
								style="text-decoration: none"
								:href="movieDetails.homepage"
								target="_blank"
								>{{ movieDetails.original_title }}</a
							>
						</p>
						<v-chip-group class="pb-2">
							<v-chip
								tag
								small
								ripple
								class="ml-1"
								color="red"
								text-color="white"
								v-for="({ name }, index) in movieDetails.genres"
								:key="index"
								>{{ name }}</v-chip
							>
						</v-chip-group>
						<p class="font-weight-bold">{{ movieDetails.tagline }}</p>
						<p>{{ movieDetails.overview }}</p>
						<p v-if="movieDetails.budget">
							<v-icon color="red">mdi-currency-usd</v-icon>
							<span class="ml-2"
								>Budget: {{ movieDetails.budget.toLocaleString('en-US') }}</span
							>
						</p>
						<p>
							<v-icon color="red">mdi-calendar-today</v-icon>
							<span class="ml-2"
								>Release Date:
								{{ getFormattedReleaseDate(movieDetails.release_date) }}</span
							>
						</p>
						<p>
							<v-icon color="red">mdi-timer</v-icon>
							<span class="ml-2"
								>Runtime: {{ getRuntime(movieDetails.runtime) }}</span
							>
						</p>
						<p>
							<v-icon color="red">mdi-star-face</v-icon>
							<span class="ml-2"
								><span class="text-weight-medium">Rating:</span>
								{{ Math.floor(movieDetails.vote_average) }}</span
							>
						</p>
					</v-col>
				</v-row>
				<v-card-title style="text-align: center !important"
					>Movie Casts</v-card-title
				>
				<v-row>
					<v-col class="align-center">
						<v-row align="center" justify="center">
							<div
								:key="index"
								class="d-flex pa-2"
								v-for="(cast, index) in movieCasts.cast">
								<movie-cast :cast="cast"></movie-cast>
							</div>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	import MovieCast from './MovieCast.vue';
	import MovieService from '@/service/MovieService';
	const movieService = new MovieService();

	export default {
		name: 'MovieDetails',

		data: () => ({
			movieDetails: {},
			recommendedMovies: [],
			movieCasts: {},
		}),

		components: {
			MovieCast,
		},

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

		computed: {
			showMovieDetails: {
				get: function () {
					return this.value;
				},
				set: function (value) {
					this.$emit('input', value);
				},
			},
		},

		watch: {
			movieId: {
				handler: function () {
					this.fetchMovieDetails();
				},
			},
		},

		methods: {
			getFormattedReleaseDate: function (date) {
				const formattedDate = new Date(date);
				return formattedDate.toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				});
			},
			getRuntime: function (runTime) {
				let hours = Math.floor(runTime / 60);
				let mins = runTime % 60;

				if (hours < 10) hours = `0${hours}`;
				if (mins < 10) mins = `0${mins}`;

				return `${hours}:${mins}`;
			},
			fetchMovieDetails: async function () {
				this.movieDetails = await movieService.getMovieDetails(this.movieId);
				this.movieCasts = await movieService.getMovieCasts(this.movieId);
			},
		},
	};
</script>

<style scoped>
	.side-padding {
		padding: 0 14% 0 14%;
	}
</style>
