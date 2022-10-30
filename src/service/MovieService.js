import axios from 'axios';
import MOVIE_CATEGORIES from '@/enums/MovieCategories';

export default class MovieService {
	/**
	 * helper function to build movies array with
	 * genre name array.
	 * @param array movies
	 * @returns movies with genres array;
	 */
	async fetchMoviesWithGenres(data) {
		const genres = await this.getMovieGenres();
		data.results.forEach((movie) => {
			const genreNameArr = [];
			movie.genre_ids.forEach((e) => {
				genres.forEach(({ id, name }) => {
					if (id === e) genreNameArr.push(name);
				});
				movie['genres'] = genreNameArr;
				delete movie.genre_ids;
			});
		});
		return data;
	}
	/**
	 * function responsible for fetching movie based on categories.
	 * @param string categories
	 * @param number page
	 * @param boolean includeAdult
	 * @returns movies
	 */
	async fetchMoviesByCategories(
		categories = '',
		page = 1,
		includeAdult = false
	) {
		if (!categories.trim().length)
			throw new Error('Categories for the movies cannot be empty');

		switch (categories) {
			case MOVIE_CATEGORIES.UPCOMING_MOVIES:
			case MOVIE_CATEGORIES.TOP_RATED_MOVIES:
			case MOVIE_CATEGORIES.NOW_IN_THEATER:
			case MOVIE_CATEGORIES.POPULAR_MOVIES:
				try {
					const { data } = await axios.get(
						`${process.env.VUE_APP_API_URL}movie/${categories}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}&include_adult=${includeAdult}`
					);
					return this.fetchMoviesWithGenres(data);
				} catch (error) {
					console.error(error);
					throw new Error('Unable to fetch movies at this moment.');
				}
			default:
				try {
					const { data } = await axios.get(
						`${process.env.VUE_APP_API_URL}movie/${MOVIE_CATEGORIES.TOP_RATED_MOVIES}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`
					);
					return this.fetchMoviesWithGenres(data);
				} catch (error) {
					console.error(error);
					throw new Error('Unable to fetch movies at this moment.');
				}
		}
	}

	/**
	 * fetching movie genres and storing in browser cache memory.
	 * @returns movieGenres
	 */
	async getMovieGenres() {
		try {
			if ('caches' in window) {
				const hasCaches = await caches.has('movie_genres');
				if (hasCaches) {
					let response = await caches.match('movie_genres');
					return response.json();
				} else {
					const { data } = await axios.get(
						`${process.env.VUE_APP_API_URL}genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
					);
					const cache = await caches.open('movie_genres');
					cache.put(
						'movie_genres',
						new Response(JSON.stringify(data.genres), {
							headers: {
								'content-type': 'application/json',
							},
						})
					);
					return data.genres;
				}
			} else {
				const { data } = await axios.get(
					`${process.env.VUE_APP_API_URL}genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
				);
				return data.genres;
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async getSearchResults(movieName = '', page = 1, includeAdult = true) {
		if (!movieName.trim().length)
			throw new Error('Movie search query cannot be empty.');

		try {
			const { data } = await axios.get(
				`${process.env.VUE_APP_API_URL}search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&query=${movieName}&page=${page}&include_adult=${includeAdult}`
			);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async getMovieDetails(movieID) {
		try {
			const { data } = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/${movieID}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
			);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async getMovieCasts(movieID) {
		try {
			const { data } = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/${movieID}/credits?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
			);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async getMovieRecommendations(movieID, page = 1) {
		try {
			const { data } = await axios.get(
				`${process.env.VUE_APP_API_URL}movie/${movieID}/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`
			);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
