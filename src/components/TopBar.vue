<template>
	<v-app-bar app>
		<v-toolbar-title>Voomie</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-text-field
			v-model.trim="searchText"
			dense
			filled
			rounded
			clearable
			placeholder="Search..."
			class="shrink mx-5 mt-6"
			v-show="showSearchBox"
			@keyup.enter="onSearch"
		></v-text-field>
		<v-btn icon @click="handleSearch">
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
	export default {
		name: 'top-bar',

		data: () => ({
			showSearchBox: false,
			searchText: '',
		}),

		methods: {
			handleSearch: function () {
				this.showSearchBox = !this.showSearchBox;
			},

			onSearch: function () {
				this.$emit('search-event', this.searchText);
			},
		},
	};
</script>

<style scoped></style>
