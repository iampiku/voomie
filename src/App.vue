<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-main>
			<v-container d-flex justify-center>
				<movie-carousel
					:movies="popularMovies"
					@on-click="handleSelect"
				></movie-carousel>
			</v-container>
		</v-main>
		<v-footer padless fixed>
			<bottom-navigation
				@nav-action="handlePageSwitch"
			></bottom-navigation>
		</v-footer>
	</v-app>
</template>

<script>
	import BottomNavigation from '@/components/BottomNavigation.vue';
	import TopBar from '@/components/TopBar.vue';
	import MovieCarousel from '@/components/MovieCarousel.vue';

	import { mapGetters } from 'vuex';

	export default {
		name: 'App',

		components: {
			BottomNavigation,
			TopBar,
			MovieCarousel,
		},

		data: () => ({}),

		mounted() {
			this.$store.dispatch('popularMovies');
		},

		computed: {
			...mapGetters({
				popularMovies: 'getPopularMovies',
			}),
		},

		methods: {
			handleSelect(movie) {
				this.$store.dispatch('movieCasts', movie);
				console.log(movie);
			},

			handleSearch: function (searchItem) {
				this.$store.dispatch('searchedMovies', searchItem);
				console.log(searchItem);
			},

			handlePageSwitch: function (navItem) {
				console.log(navItem);
			},
		},
	};
</script>
