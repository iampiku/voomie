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
		latestMovies: {},
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

		getLatestMovies(state) {
			return state.latestMovies;
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

		setLatestMovies(state, latestMovies) {
			state.latestMovies = latestMovies;
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

		async latestMovies({ commit }) {
			const data = await movieService.getLatestMovie();
			commit('setLatestMovies', data);
		},
	},
	modules: {},
});
