import Vue from 'vue';
import Vuex from 'vuex';

import MovieService from '@/service/MovieService';
const movieService = new MovieService();

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		popularMovies: [],
		moviesInTheater: [],
		upComingMovies: [],
		topRatedMovies: [],
		movieRecommendation: [],
		movieGenres: [],
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

		getMovieGenres(state) {
			return state.movieGenres;
		},

		getMovieCasts(state) {
			return state.casts;
		},

		getMovieRecommendations(state) {
			return state.movieRecommendation;
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

		setMovieGenres(state, movieGenres) {
			state.movieGenres = movieGenres;
		},

		setMovieCasts(state, casts) {
			state.casts = casts;
		},

		setMovieRecommedation(state, movieRecommendation) {
			state.movieRecommendation = movieRecommendation;
		},
	},
	actions: {
		async popularMovies({ commit }) {
			const data = await movieService.getPopularMovies();
			commit('setPopularMovies', data);
		},

		async moviesInTheater({ commit }) {
			const data = await movieService.getMoviesInTheater();
			commit('setMoviesInTheater', data);
		},

		async upComingMovies({ commit }) {
			const data = await movieService.getUpcomingMovies();
			commit('setUpComingMovies', data);
		},

		async topRatedMovies({ commit }) {
			const data = await movieService.getTopRatedMovies();
			commit('setTopRatedMovies', data);
		},

		async movieGenres({ commit }) {
			const data = await movieService.getMovieGenres();
			commit('setMovieGenres', data);
		},

		async movieCasts({ commit }, movieID) {
			const data = await movieService.getMovieCasts(movieID);
			commit('setMovieCasts', data);
		},

		async movieRecommendation({ commit }, movieID) {
			const data = await movieService.getMovieRecommendations(movieID);
			commit('setMovieRecommendation', data);
		},
	},
	modules: {},
});
