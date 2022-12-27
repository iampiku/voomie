<template>
	<v-chip>
		<v-avatar v-if="cast.profile_path">
			<v-img :src="`http://image.tmdb.org/t/p/original${cast.profile_path}`">
			</v-img>
		</v-avatar>
		<span class="mx-2">{{ cast.original_name }}</span>
		<span v-if="cast.character">Character: {{ cast.character }}</span>
	</v-chip>
</template>

<script>
	export default {
		name: 'MovieCast',

		props: {
			cast: {
				type: Object,
				required: true,
			},
		},
	};
</script>
