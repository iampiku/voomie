<template>
	<v-app-bar app>
		<v-toolbar-title>
			<v-img
				icon
				src="../assets/clapperboard.png"
				width="35"
				class="mb-1"></v-img>
		</v-toolbar-title>
		<v-toolbar-title class="pl-2">Voomie</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-text-field
			v-model.trim="searchText"
			dense
			filled
			rounded
			clearable
			placeholder="Search...🍿"
			prepend-inner-icon="mdi-magnify"
			class="pt-6 shrink expanding-search"
			:class="{ closed: searchBoxClosed && !searchText }"
			@keyup.enter="$emit('search-event', searchText)"
			@focus="searchBoxClosed = false"
			@blur="searchBoxClosed = true">
		</v-text-field>

		<div class="px-3">
			<v-icon class="" @click.stop="handleThemeSwitch">{{
				getSwitchIcon
			}}</v-icon>
		</div>
	</v-app-bar>
</template>

<script>
	export default {
		name: 'top-bar',

		data: () => ({
			searchText: null,
			searchBoxClosed: true,
		}),

		mounted: function () {
			this.handleAppTheme();
		},

		computed: {
			getSwitchIcon: function () {
				return this.$vuetify.theme.isDark
					? 'mdi-weather-night'
					: 'mdi-white-balance-sunny';
			},
		},

		methods: {
			handleThemeSwitch: function () {
				this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
				localStorage.setItem('currentTheme', this.$vuetify.theme.isDark);
			},
			handleAppTheme: function () {
				const currentTheme = localStorage.getItem('currentTheme');
				if (currentTheme === 'true') this.$vuetify.theme.isDark = true;
				else {
					this.$vuetify.theme.isDark = false;
					localStorage.setItem('currentTheme', this.$vuetify.theme.isDark);
				}
			},
			handleHomeRoute: function () {
				console.log('Home');
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
