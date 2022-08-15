import axios from 'axios';

export default class MovieService {
	async getPopularMovies() {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`
			);
			return response?.data?.results;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getMoviesInTheater() {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`
			);
			return response?.data?.results;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getUpcomingMovies() {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/upcoming?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`
			);
			return response?.data?.results;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getTopRatedMovies() {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`
			);
			return response?.data?.results;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getMovieGenres() {
		try {
			if ('caches' in window) {
				const hasCaches = await caches.has('movie_genres');
				if (hasCaches) {
					let response = await caches.match('movie_genres');
					return response.json();
				} else {
					const response = await axios.get(
						`${process.env.VUE_APP_API_URL}genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
					);
					const cache = await caches.open('movie_genres');
					cache.put(
						'movie_genres',
						new Response(JSON.stringify(response?.data?.genres), {
							headers: {
								'content-type': 'application/json',
							},
						})
					);
					return response?.data?.genres;
				}
			} else {
				const response = await axios.get(
					`${process.env.VUE_APP_API_URL}genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
				);
				return response?.data?.genres;
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getSearchResults(movieName) {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
			);
			return response?.data?.results;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getMovieCasts(movieID) {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/${movieID}/credits?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
			);
			return response?.data?.cast;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getMovieRecommendations(movieID) {
		try {
			const response = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/${movieID}/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`
			);
			return response?.data?.results;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
