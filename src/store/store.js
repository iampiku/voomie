import Vue from 'vue';
import Vuex from 'vuex';

import MovieService from '@/service/MovieService';
const movieService = new MovieService();

Vue.use(Vuex);

/**
 * helper function to build movies array with
 * genre name array;
 * @param {Array} movies
 * @returns movies with genres array;
 */
async function fetchMoviesWithGenres(movies) {
	const genres = await movieService.getMovieGenres();
	movies.forEach((movie) => {
		const genreNameArr = [];
		movie.genre_ids.forEach((e) => {
			genres.forEach(({ id, name }) => {
				if (id === e) genreNameArr.push(name);
			});
			movie['genres'] = genreNameArr;
			delete movie.genre_ids;
		});
	});
	return movies;
}

export default new Vuex.Store({
	state: {
		popularMovies: [],
		moviesInTheater: [],
		upComingMovies: [],
		topRatedMovies: [],
		movieRecommendation: [],
		movieDetails: {},
		searchedMovies: [],
		casts: [],
	},
	getters: {
		getPopularMovies(state) {
			return state.popularMovies;
		},

		getMoviesInTheater(state) {
			return state.moviesInTheater;
		},

		getUpComingMovies(state) {
			return state.upComingMovies;
		},

		getTopRatedMovies(state) {
			return state.topRatedMovies;
		},

		getSearchedMovies(state) {
			return state.searchedMovies;
		},

		getMovieCasts(state) {
			return state.casts;
		},

		getMovieRecommendations(state) {
			return state.movieRecommendation;
		},

		getMovieDetails(state) {
			return state.movieDetails;
		},
	},
	mutations: {
		setPopularMovies(state, popularMovies) {
			state.popularMovies = popularMovies;
		},

		setMoviesInTheater(state, moviesInTheater) {
			state.moviesInTheater = moviesInTheater;
		},

		setUpComingMovies(state, upComingMovies) {
			state.upComingMovies = upComingMovies;
		},

		setTopRatedMovies(state, topRatedMovies) {
			state.topRatedMovies = topRatedMovies;
		},

		setSearchMovies(state, searchedMovies) {
			state.searchedMovies = searchedMovies;
		},

		setMovieCasts(state, casts) {
			state.casts = casts;
		},

		setMovieRecommendation(state, movieRecommendation) {
			state.movieRecommendation = movieRecommendation;
		},

		setMovieDetails(state, movieDetails) {
			state.movieDetails = movieDetails;
		},
	},
	actions: {
		async popularMovies({ commit }) {
			const data = await movieService.getPopularMovies();
			const movies = await fetchMoviesWithGenres(data);
			commit('setPopularMovies', movies);
		},

		async moviesInTheater({ commit }) {
			const data = await movieService.getMoviesInTheater();
			const movies = await fetchMoviesWithGenres(data);
			commit('setMoviesInTheater', movies);
		},

		async upComingMovies({ commit }) {
			const data = await movieService.getUpcomingMovies();
			const movies = await fetchMoviesWithGenres(data);
			commit('setUpComingMovies', movies);
		},

		async topRatedMovies({ commit }) {
			const data = await movieService.getTopRatedMovies();
			const movies = await fetchMoviesWithGenres(data);
			commit('setTopRatedMovies', movies);
		},

		async searchedMovies({ commit }, movieName) {
			const data = await movieService.getSearchResults(movieName);
			const movies = await fetchMoviesWithGenres(data);
			commit('setSearchMovies', movies);
		},

		async movieCasts({ commit }, movieID) {
			const data = await movieService.getMovieCasts(movieID);
			commit('setMovieCasts', data);
		},

		async movieRecommendation({ commit }, movieID) {
			const data = await movieService.getMovieRecommendations(movieID);
			const movies = await fetchMoviesWithGenres(data);
			commit('setMovieRecommendation', movies);
		},

		async movieDetails({ commit }, movieID) {
			const data = await movieService.getMovieDetails(movieID);
			commit('setMovieDetails', data);
		},
	},
	modules: {},
});
