<template>
	<div id="app">

		<navigation></navigation>
	
		<router-view></router-view>
		
		<loading-screen></loading-screen>

	</div>
</template>

<script>

// MODULES & LIBRARIES

// COMPONENTS
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'

export default {
	name: 'app',
	components: { Navigation, LoadingScreen, },
	created() {
		// console.log(`App.vue created`)
	},
	mounted() {
		// console.log(`App.vue mounted`)
	},
	computed: {
	},
	methods: {
	},
	watch: {
		'$store.state.init' () {

		}
	},
}
</script>

<style lang="scss">

#app {
	padding-top: $navigationHeight;
}

@import './styles/app.scss';

</style>
