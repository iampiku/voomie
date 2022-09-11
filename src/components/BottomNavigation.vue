<template>
	<v-bottom-navigation
		shift
		class="justify-space-around"
		v-model="defaultValue"
	>
		<v-btn icon @click="$emit('nav-action', 'home')">
			<span>Home</span>

			<v-icon>mdi-home</v-icon>
		</v-btn>
		<v-btn icon @click="$emit('nav-action', 'popular')">
			<span>Popular</span>

			<v-icon>mdi-crown</v-icon>
		</v-btn>

		<v-btn icon @click="$emit('nav-action', 'upcoming')">
			<span>Up Coming</span>

			<v-icon>mdi-motion-play</v-icon>
		</v-btn>

		<v-btn icon @click="$emit('nav-action', 'nowplaying')">
			<span>Now Playing</span>

			<v-icon>mdi-movie-play</v-icon>
		</v-btn>
		<v-btn icon @click="$emit('nav-action', 'about')">
			<span>About</span>

			<v-icon>mdi-face-man</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
	export default {
		name: 'bottom-navigation',
		data: () => ({
			defaultValue: 0,
		}),

		methods: {},
	};
</script>
