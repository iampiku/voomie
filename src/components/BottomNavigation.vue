<template>
	<v-bottom-navigation shift class="justify-space-around">
		<v-btn icon @click="handleNavAction('popular')">
			<span>Popular</span>

			<v-icon>mdi-movie-play</v-icon>
		</v-btn>

		<v-btn icon @click="handleNavAction('upcoming')">
			<span>Up Coming</span>

			<v-icon>mdi-motion-play</v-icon>
		</v-btn>

		<v-btn icon @click="handleNavAction('top-rated')">
			<span>Top Rated</span>

			<v-icon>mdi-crown</v-icon>
		</v-btn>
		<v-btn icon @click="handleNavAction('about')">
			<span>About</span>

			<v-icon>mdi-face-man</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
	export default {
		name: 'bottom-navigation',
		data: () => ({}),

		methods: {
			/**
			 * @params {String} item => name of the tap;
			 */
			handleNavAction(item) {
				this.$emit('nav-action', item);
			},
		},
	};
</script>
