<template>
	<v-main> </v-main>
</template>

<script>
	export default {
		name: 'movie-cast',
		data: () => ({}),

		props: {
			movieCasts: {
				type: Object,
				required: true,
			},
		},

		methods: {},
	};
</script>

<style scoped></style>
