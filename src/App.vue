<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-main>
			<v-container> </v-container>
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

	export default {
		name: 'App',

		components: {
			BottomNavigation,
			TopBar,
		},

		data: () => ({
			movies: [],
		}),

		methods: {
			fetchMoviesWithGenres: function () {
				console.log(this.movies);
			},

			handleSearch(searchItem) {
				console.log(searchItem);
			},

			handlePageSwitch: function (item) {
				console.log(item);
			},
		},
	};
</script>
