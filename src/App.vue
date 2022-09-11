<template>
	<v-app>
		<top-bar @search-event="handleSearch"></top-bar>
		<v-container fluid class="app-bottom-padding">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</v-container>
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
					case 'home':
						this.$router.push('/home');
						break;
					case 'popular':
						this.$store.dispatch('popularMovies');
						this.$router.push('/popular');
						break;
					case 'upcoming':
						this.$store.dispatch('upComingMovies');
						this.$router.push('/upcoming');
						break;
					case 'nowplaying':
						this.$store.dispatch('moviesInTheater');
						this.$router.push('/nowplaying');
						break;
					default:
						console.log('About');
				}
			},
		},
	};
</script>

<style scoped>
	.app-bottom-padding {
		padding-bottom: 10% !important;
	}
</style>
