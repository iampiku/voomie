<template>
	<v-app-bar app :color="bg">
		<v-toolbar-title>Voomie</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-text-field
			v-model.trim="searchText"
			dense
			filled
			rounded
			clearable
			placeholder="Search"
			prepend-inner-icon="mdi-magnify"
			class="pt-6 shrink expanding-search"
			:class="{ closed: searchBoxClosed && !searchText }"
			@keyup.enter="onSearch"
			@focus="searchBoxClosed = false"
			@blur="searchBoxClosed = true"
		></v-text-field>
	</v-app-bar>
</template>

<script>
	export default {
		name: 'top-bar',

		data: () => ({
			searchText: null,
			searchBoxClosed: true,
			bg: '',
		}),

		mounted: function () {
			window.scroll = () => {
				this.changeColor();
			};
		},

		methods: {
			changeColor: function () {
				if (
					document.body.scrollTop > 100 ||
					document.documentElement.scrollTop > 100
				) {
					this.bg = 'white';
				} else {
					this.bg = 'transparent';
				}
			},
			onSearch: function () {
				this.$emit('search-event', this.searchText);
			},
		},
	};
</script>

<style scoped lang="sass">
	.v-input.expanding-search
		transition: max-width 0.5s
		&.closed
			max-width: 70px
</style>
