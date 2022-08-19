<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-main>
			<v-container>
				<router-view></router-view>
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

	export default {
		name: 'App',

		components: {
			BottomNavigation,
			TopBar,
		},

		data: () => ({}),

		methods: {
			handleSearch: function (searchItem) {
				this.$store.dispatch('searchedMovies', searchItem);
			},

			handlePageSwitch: function (navItem) {
				switch (navItem) {
					case 'popular':
						this.$store.dispatch('popularMovies');
						break;
					case 'upcoming':
						this.$store.dispatch('upComingMovies');
						break;
					case 'top-rated':
						this.$store.dispatch('topRatedMovies');
						break;
					default:
						console.log('About');
				}
			},
		},
	};
</script>
